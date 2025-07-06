import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';

export default function RouteLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

  return (
    <>
      <StatusBar style='auto' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='about' options={{ title: 'About' }} />
        <Stack.Screen
          name='contact'
          options={{ title: 'Contact', headerShown: false }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({});
