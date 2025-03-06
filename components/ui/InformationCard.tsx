// In InformationCard.tsx
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InformationCard = ({ data, title }: { data: any, title: any }) => {
    console.log('The data from InformationCard is : ', data);
    console.log('The data subtopics from InformationCard is : ', data?.subtopics);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {data?.subtopics && data.subtopics.map((subtopic: any, index: any) => (
                <View key={index} style={styles.subtopicContainer}>
                    <Text style={styles.subtopicName}>{subtopic.name}</Text>
                    <Text style={styles.description}>{subtopic.description}</Text>
                    <View style={styles.exampleContainer}>
                        <Text style={styles.exampleTitle}>Example:</Text>
                        <Text style={styles.example}>{subtopic.example}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F0F0F0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtopicContainer: {
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#E6E6FA',
        borderRadius: 8,
    },
    subtopicName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 12,
    },
    exampleContainer: {
        backgroundColor: '#4B0082',
        padding: 10,
        borderRadius: 6,
    },
    exampleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 4,
    },
    example: {
        fontSize: 14,
        fontFamily: 'monospace',
        color: 'white',
    }
});

export default InformationCard