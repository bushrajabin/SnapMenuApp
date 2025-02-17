import GlobalStyle from "@/components/GlobalStyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { usePathname } from "expo-router";  // Import usePathname

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemedApp />
  );
}

function ThemedApp() {
  const pathname = usePathname();  // Use the current path name
  // Check if the current route is 'login' or 'registration'
  const isLoginOrRegister = pathname?.includes('Login') || pathname?.includes('Registration');
  // Set background color dynamically based on the page
  const backgroundColor = isLoginOrRegister ? "black" : "white";
 // Status bar style: dark for light background, light for dark background
  const statusBarStyle = backgroundColor === "black" ? "light" : "dark";

  return (
    <SafeAreaView
      style={[
        GlobalStyle.androidSafeArea,
        { backgroundColor },
      ]}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>

      {/* StatusBar Color Changes Dynamically */}
      <StatusBar
        style={statusBarStyle}
        backgroundColor={backgroundColor}
      />
    </SafeAreaView>
  );
}
