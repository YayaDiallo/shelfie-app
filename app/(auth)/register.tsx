import { StyleSheet, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Spacer } from '@/components/Spacer';
import { Link } from 'expo-router';
import { ThemedButton } from '@/components/ThemedButton';

export default function Register() {
  const handleSubmit = () => {
    console.log('Register button pressed');
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Register for an Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText style={styles.link}>Login instead</ThemedText>
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
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  },
  link: {
    textAlign: 'center',
  },
});
