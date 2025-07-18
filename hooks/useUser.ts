import { UserContext } from '@/contexts/UserContext';
import { useContext } from 'react';

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('useUser must be used within a UserProvider');
  }

  return context;
}
