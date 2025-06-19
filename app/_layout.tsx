import GlobalStyle from "@/components/GlobalStyle";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
  View,
  StatusBar,
} from "react-native";

// Prevent splash screen from auto hiding
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

  return <ThemedApp />;
}

function ThemedApp() {
  const pathname = usePathname();

  const isLoginOrRegister =
    pathname?.toLowerCase().includes("login") ||
    pathname?.toLowerCase().includes("registration");

  const backgroundColor = isLoginOrRegister ? "black" : "white";
  const barStyle = backgroundColor === "black" ? "light-content" : "dark-content";

  return (
    <>
      {/* Background View under StatusBar */}
      {Platform.OS === "android" && (
        <View
          style={{
            height: RNStatusBar.currentHeight,
            backgroundColor,
          }}
        />
      )}

      {/* Actual app UI */}
      <SafeAreaView
        style={[
          GlobalStyle.androidSafeArea,
          { flex: 1, backgroundColor },
        ]}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index"/>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaView>

      {/* Native StatusBar (not expo-status-bar) */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={barStyle}
      />
    </>
  );
}
