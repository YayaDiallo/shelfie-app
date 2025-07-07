import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import ThemedLogo from '@/components/ThemedLogo';
import Spacer from '@/components/Spacer';
import ThemedText from '@/components/ThemedText';

// In this way we can import images without TypeScript errors "Cannot find module './..png' or its corresponding type declarations.ts(2307)"
// const Logo = require('@/assets/images/img/logo_light.png');

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title>
        The Number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Link href='/about' style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href='/contact' style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
