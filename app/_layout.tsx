import { Stack, useRouter, useSegments } from "expo-router";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { AppState } from "react-native";
import LoadingScreen from "@/components/LoadingScreen";

// Prevent splash screen auto-hide
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [initializing, setInitializing] = useState(true);
    const router = useRouter();
    const segments = useSegments();

    // Handle authentication state changes
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            console.log("onAuthStateChanged", user);
            setUser(user);
            setInitializing(false);
            SplashScreen.hideAsync(); // Hide splash after auth check
        });

        return unsubscribe; // Cleanup
    }, []);

    // Handle app state changes (sign out on close)
    useEffect(() => {
        const handleAppStateChange = (nextAppState: string) => {
            if (nextAppState === "background" || nextAppState === "inactive") {
                auth().signOut().catch((error) => console.log("Sign out error:", error));
            }
        };

        const subscription = AppState.addEventListener("change", handleAppStateChange);
        return () => subscription.remove();
    }, []);

    // Handle navigation
    useEffect(() => {
        if (initializing) return;

        const inAuthGroup = segments[0] === "(tabs)";

        if (user && !inAuthGroup) {
            console.log("Navigating to Home");
            router.replace("/(tabs)/Home");
        } else if (!user && inAuthGroup) {
            console.log("Navigating to Index");
            router.replace("/");
        }
    }, [user, initializing]);

    if (initializing) {
        return <LoadingScreen />;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(info)" />
        </Stack>
    );
}
