import { Image, ImageProps, useColorScheme } from 'react-native';
import DarkLogo from '@/assets/img/logo_dark.png';
import LightLogo from '@/assets/img/logo_light.png';

export function ThemedLogo({ ...props }: ImageProps) {
  const colorScheme = useColorScheme();
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
}
