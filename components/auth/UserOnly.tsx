import { useUser } from '@/hooks/useUser';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { ThemedLoader } from '../ThemedLoader';

export function UserOnly({ children }: { children: React.ReactNode }) {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace('/login');
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
}
