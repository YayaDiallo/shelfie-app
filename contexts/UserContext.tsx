import { account } from '@/lib/appwrite';
import { createContext, useEffect, useState } from 'react';
import { ID } from 'react-native-appwrite';

export interface User {
  $id: string;
  email: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  authChecked: boolean;
}
export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response as User);
    } catch (error: unknown) {
      throw Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  async function register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error: unknown) {
      throw Error(
        error instanceof Error ? error.message : 'Registration failed',
      );
    }
  }

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
  }

  async function getInitialUserValue() {
    try {
      const response = await account.get();
      setUser(response as User);
    } catch (error: unknown) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getInitialUserValue();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, authChecked }}
    >
      {children}
    </UserContext.Provider>
  );
}
