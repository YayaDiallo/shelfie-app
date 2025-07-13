import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
export function useTheme() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

  return { theme };
}
