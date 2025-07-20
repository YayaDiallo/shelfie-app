import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Spacer } from '@/components/Spacer';
import { Link } from 'expo-router';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { Colors } from '@/constants/Colors';

export default function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');

  const { register } = useUser();

  const handleSubmit = async () => {
    setError('');
    try {
      await register(email, password);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Registration failed');
    }
  };

  return (
    // Dismiss keyboard on touch outside input
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Register for an Account
        </ThemedText>
        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder='Email'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
        <Link href='/login'>
          <ThemedText style={styles.link}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
