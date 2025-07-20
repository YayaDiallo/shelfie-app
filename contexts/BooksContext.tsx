import { useUser } from '@/hooks/useUser';
import { databases, client } from '@/lib/appwrite';
import { createContext, useEffect, useState } from 'react';
import { ID, Models, Permission, Query, Role } from 'react-native-appwrite';

const DATABASE_ID = '6873a1110031fae51663';
const COLLECTION_ID = '6873a125001ee765ea54';

export interface Book extends Models.Document {
  title: string;
  author: string;
  description: string;
  userId: string;
}

type CreateBookData = Omit<Book, 'userId'>;

interface BooksContextType {
  books: Book[] | [];
  fetchBooks: () => Promise<void>;
  fetchBookById: (bookId: string) => Promise<Book | undefined>;
  createBook: (book: CreateBookData) => Promise<Book>;
  deleteBook: (bookId: string) => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | undefined>(
  undefined,
);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal('userId', user ? user.$id : '')],
      );
      setBooks(response.documents as Book[]);

      console.log('first fetchBooks response:', response);
    } catch (error: unknown) {
      console.error('Failed to fetch books:', error);
    }
  }

  async function fetchBookById(bookId: string) {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        bookId,
      );
      return response as Book;
    } catch (error: unknown) {
      console.error('Failed to fetch book by ID:', error);
    }
  }

  async function createBook(book: CreateBookData) {
    const userId = user ? user.$id : '';
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...book, userId: userId },
        [
          Permission.read(Role.user(userId)),
          Permission.update(Role.user(userId)),
          Permission.delete(Role.user(userId)),
        ],
      );
      return newBook as Book;
    } catch (error: unknown) {
      console.error('Failed to create book:', error);
      throw error;
    }
  }

  async function deleteBook(bookId: string) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, bookId);
    } catch (error: unknown) {
      console.error('Failed to delete book:', error);
    }
  }

  useEffect(() => {
    let unsubscribe: () => void;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;
    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events[0].includes('create')) {
          setBooks((prevBooks) => [...prevBooks, payload as Book]);
        }
        if (events[0].includes('delete')) {
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.$id !== (payload as Book).$id),
          );
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
