import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import InformationCard from './InformationCard'

const ScrollViewComponent = ({ data, language }: any) => {
    const router = useRouter()
    console.log("data in ScrollViewComponent", data)


    const handlePress = (topicName: any) => {
        router.push({
            pathname: "/(info)/InformationScreen",
            params: {
                data: JSON.stringify(data),
                title: topicName,
                language: language
            }
        });
    }



    return (


        <FlatList
            style={styles.flatList}
            data={data}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => handlePress(item.name)} style={styles.flatListElement}>
                    <Text style={styles.flatListTitle}>
                        {item.name}
                    </Text>
                </TouchableOpacity>}
        // keyExtractor={item => item.data}
        />




    )
}

export default ScrollViewComponent

const styles = StyleSheet.create({
    flatList: {
        padding: 30,
        backgroundColor: '#4B0082',
        flexDirection: 'column',
        gap: 40

    },
    flatListElement: {
        paddingVertical: 20,
        backgroundColor: '#E6E6FA',
        borderRadius: 9,
        marginVertical: 3,
        paddingHorizontal: 20,


    },
    flatListTitle: {
        fontSize: 20
    }
})