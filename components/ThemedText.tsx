import { StyleProp, Text, TextProps, ViewStyle } from 'react-native';
import { useTheme } from './useTheme';

interface ThemedTextProps {
  style?: StyleProp<ViewStyle>;
  title?: boolean;
}

export function ThemedText({
  style,
  title = false,
  ...props
}: ThemedTextProps & TextProps) {
  const { theme } = useTheme();

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
}
