import { Spacer } from '@/components/Spacer';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedCard } from '@/components/ThemedCard';
import { ThemedLoader } from '@/components/ThemedLoader';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Book } from '@/contexts/BooksContext';
import { useBooks } from '@/hooks/useBooks';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export default function BookDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | undefined>();
  const { fetchBookById, deleteBook } = useBooks();

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id as string);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  const handleDelete = async () => {
    await deleteBook(id as string);
    router.replace('/books');
  };

  if (!book) {
    return (
      <ThemedView safe style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center',
  },
});
