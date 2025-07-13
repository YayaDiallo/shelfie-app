import { ThemedLoader } from '@/components/ThemedLoader';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export function GuestOnly({ children }: { children: React.ReactNode }) {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace('/profile');
    }
  }, [user, authChecked]);

  if (!authChecked || user) {
    return <ThemedLoader />;
  }

  return children;
}
