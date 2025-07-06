import { Colors } from '@/constants/Colors';
import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export function ThemedCard({
  style,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
} & ViewProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

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
