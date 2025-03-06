import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

const SyntaxHighlighterComponent = ({ data }: { data: string }) => {
    // First check: if data is undefined or null, return a fallback
    if (!data) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No code example available</Text>
            </View>
        );
    }

    try {
        // Use a different style (github) which is more likely to be available
        return (
            <SyntaxHighlighter
                language="java"
                style={github}
                customStyle={styles.codeContainer}
            // Important: Remove this prop as it might be causing issues
            // highlighter="prism" 
            >
                {data}
            </SyntaxHighlighter>
        );
    } catch (error) {
        // Fallback if the syntax highlighter fails
        console.log('Syntax highlighter error:', error);
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.codeText}>{data}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    codeContainer: {
        margin: 0,
        padding: 10,
        borderRadius: 5,
    },
    fallbackContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    fallbackText: {
        fontFamily: 'monospace',
        color: '#666',
    },
    codeText: {
        fontFamily: 'monospace',
        color: '#333',
    }
});

export default SyntaxHighlighterComponent;