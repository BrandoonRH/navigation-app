
import { Slot, SplashScreen } from 'expo-router';
import "./global.css";

SplashScreen.preventAutoHideAsync();

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
const RooLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (<Slot />)
}

export default RooLayout