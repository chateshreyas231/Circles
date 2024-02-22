import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SplashScreen as ExpoSplashScreen, Stack, ErrorBoundary } from 'expo-router';
import Splash from './splash'; // Import your custom SplashScreen component

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

ExpoSplashScreen.preventAutoHideAsync(); // Prevent the expo splash screen from auto-hiding

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const [AppReady, setAppReady] = useState(false);

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => { // Add a timeout to simulate loading time if needed
        setAppReady(true);
        ExpoSplashScreen.hideAsync(); // Hide the expo splash screen when the app is ready
      }, 1000); // You can adjust the timeout duration as needed
    }
  }, [fontsLoaded]);

  if (AppReady) {
    // Render the custom SplashScreen with Lottie animation while the app is loading
    return <Splash />;
  }

  // Render the main content of the app after loading is complete
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}