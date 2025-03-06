import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SyntaxHighlighterComponent from './SyntaxHighlighterComponent';

const InformationCard = ({ data, title,language }: { data: any, title: string,language:string }) => {
    // Safely log data - prevent potential errors
    console.log('The data from InformationCard is: ', data || 'No data');
    console.log('The data subtopics from InformationCard is: ', data?.subtopics || 'No subtopics');

    // If no data is provided, show a fallback UI
    if (!data) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title || 'Information'}</Text>
                <Text>No information available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {data?.subtopics && data.subtopics.length > 0 ? (
                data.subtopics.map((subtopic: any, index: number) => (
                    <View key={index} style={styles.subtopicContainer}>
                        <Text style={styles.subtopicName}>{subtopic.name || 'Untitled'}</Text>
                        <Text style={styles.description}>{subtopic.description || 'No description available'}</Text>

                        {subtopic.example ? (
                            <View style={styles.exampleContainer}>
                                <Text style={styles.exampleTitle}>Example:</Text>
                                {/* <Text style={styles.example}>{subtopic.example}</Text> */}

                                {/* Only render SyntaxHighlighter if we have an example */}
                                <SyntaxHighlighterComponent data={subtopic.example} language={language} />
                            </View>
                        ) : (
                            <Text style={styles.noExample}>No example available</Text>
                        )}
                    </View>
                ))
            ) : (
                <Text>No subtopics available</Text>
            )}
        </View>
    );
};

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
        marginBottom: 8,
    },
    noExample: {
        fontStyle: 'italic',
        color: '#666',
    }
});

export default InformationCard;