import {
    View,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import InformationCard from "./InformationCard";

const ScrollViewComponent = ({ data, language }: any) => {
    const router = useRouter();
    console.log("data in ScrollViewComponent", data);

    const handlePress = (topicName: any) => {
        router.push({
            pathname: "/(info)/InformationScreen",
            params: {
                data: JSON.stringify(data),
                title: topicName,
                language: language,
            },
        });
    };

    return (
        <FlatList
            style={styles.flatList}
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => handlePress(item.name)}
                    style={styles.flatListElement}
                >
                    <Text style={styles.flatListTitle}>{item.name}</Text>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            // keyExtractor={item => item.data}
        />
    );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
    flatList: {
        padding: 30,
        backgroundColor: "black",
        flexDirection: "column",
        gap: 40,
        paddingVertical: 0,
    },
    flatListElement: {
        paddingVertical: 20,
        backgroundColor: "#27ae60",
        borderRadius: 9,
        marginVertical: 7,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: "white",
        // Remove any horizontal margin that might prevent full width
        marginHorizontal: 0,
    },
    flatListTitle: {
        fontSize: 20,
    },
    separator: {
        height: 2,
        backgroundColor: "white",
        marginVertical: 5,
        width: "100%", // Ensure full width
        alignSelf: "center", // Center the separator
    },
});
