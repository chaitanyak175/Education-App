import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Home" options={{ title: "Home" }} />
        </Stack>
    );
};

export default Layout;
