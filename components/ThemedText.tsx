import { Colors } from '@/constants/Colors';
import {
  StyleProp,
  Text,
  TextProps,
  useColorScheme,
  ViewStyle,
} from 'react-native';

interface ThemedTextProps {
  style?: StyleProp<ViewStyle>;
  title?: boolean;
}

export function ThemedText({
  style,
  title = false,
  ...props
}: ThemedTextProps & TextProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
}
