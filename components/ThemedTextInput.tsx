import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { useTheme } from './useTheme';

export function ThemedTextInput({
  style,
  ...props
}: { style?: StyleProp<TextStyle> } & TextInputProps) {
  const { theme } = useTheme();

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({});
