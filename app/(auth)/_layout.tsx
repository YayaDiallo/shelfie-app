import { GuestOnly } from '@/components/auth/GuestOnly';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default function AuthLayout() {
  return (
    <GuestOnly>
      <StatusBar style='auto' />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </GuestOnly>
  );
}

const styles = StyleSheet.create({});
