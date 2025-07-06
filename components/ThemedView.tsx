import { Colors } from '@/constants/Colors';
import {
  StyleProp,
  useColorScheme,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export function ThemedView({
  style,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
} & ViewProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  // We don't have to manually output the children here, as React automatically renders children passed to it.
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    />
  );
}
