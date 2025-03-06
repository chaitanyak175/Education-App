import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen options={{
                tabBarStyle: { display: 'none' },
                headerShown: false
            }} name='InformationScreen'></Tabs.Screen>
        </Tabs>
    )
}

export default Layout