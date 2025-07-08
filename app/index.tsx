import { Spacer } from '@/components/Spacer';
import { ThemedLogo } from '@/components/ThemedLogo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

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
      <Link href='/login' style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href='/register' style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href='/profile' style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
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
