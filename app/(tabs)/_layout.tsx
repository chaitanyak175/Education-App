import { Ionicons } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/Fontisto";

import { Stack, Tabs } from "expo-router";
import { Pressable } from "react-native";

const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000',
            tabBarStyle: { paddingHorizontal: 20, height: 75, alignItems: 'center', justifyContent: 'center' },
            tabBarItemStyle: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }} >

            <Tabs.Screen name='Javascript'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "logo-javascript" : "logo-javascript"} color={color} size={size} />,
                    tabBarButton: (props) => (
                        <Pressable
                            {...props}
                            android_ripple={{ color: 'transparent' }} // Disables ripple
                            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} // Optional opacity effect
                        />
                    ),

                }} />

            <Tabs.Screen name='Java'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "logo-steam" : "logo-steam"} color={color} size={size} />,
                    tabBarButton: (props) => (
                        <Pressable
                            {...props}
                            android_ripple={{ color: 'transparent' }} // Disables ripple
                            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} // Optional opacity effect
                        />
                    ),

                }} />

            <Tabs.Screen name='Python'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "logo-python" : "logo-python"} color={color} size={size} />,
                    tabBarButton: (props) => (
                        <Pressable
                            {...props}
                            android_ripple={{ color: 'transparent' }} // Disables ripple
                            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]} // Optional opacity effect
                        />
                    ),

                }} />
            <Tabs.Screen name='InformationScreen' />





        </Tabs>
    );
};

export default Layout;
