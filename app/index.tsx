import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import ThemedLogo from '@/components/ThemedLogo';

// In this way we can import images without TypeScript errors "Cannot find module './..png' or its corresponding type declarations.ts(2307)"
// const Logo = require('@/assets/images/img/logo_light.png');

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <Link href='/about' style={styles.link}>
        About Page
      </Link>
      <Link href='/contact' style={styles.link}>
        Contact Page
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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
