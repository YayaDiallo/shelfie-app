import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { useTheme } from './useTheme';

export function ThemedCard({
  style,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
} & ViewProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
        },
        styles.card,
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 5,
  },
});
