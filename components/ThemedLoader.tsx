import { ActivityIndicator } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from './useTheme';

export function ThemedLoader() {
  const { theme } = useTheme();

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator size='large' color={theme.text} />
    </ThemedView>
  );
}
