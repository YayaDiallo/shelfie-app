import {
  SafeAreaView,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from './useTheme';

export function ThemedView({
  style,
  safe = false,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
} & ViewProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  // We don't have to manually output the children here, as React automatically renders children passed to it.
  if (!safe)
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

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
