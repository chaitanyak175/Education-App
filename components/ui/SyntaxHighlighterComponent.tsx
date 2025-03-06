import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// Import Clipboard from the recommended package
import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

const SyntaxHighlighterComponent = ({ data, language = 'javascript' }: { data: string, language?: string }) => {
    // Return fallback if no data is provided
    if (!data) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No code example available</Text>
            </View>
        );
    }

    // Function to copy the code to clipboard
    const handleCopy = () => {
        Clipboard.setString(data);
        Alert.alert('Copied to clipboard!');
    };

    try {
        return (
            <View style={styles.container}>
                <View style={styles.exampleHeader}>

                    <Text style={styles.exampleTitle}>Example:</Text>
                    <TouchableOpacity onPress={handleCopy} style={styles.copyButtonContainer}>
                        <Text style={styles.copyButtonText}>Copy</Text>
                    </TouchableOpacity>
                </View>
                <SyntaxHighlighter
                    language={language}
                    style={github}
                    customStyle={styles.codeContainer}
                >
                    {data}
                </SyntaxHighlighter>
            </View>
        );
    } catch (error) {
        console.log('Syntax highlighter error:', error);
        return (
            <View style={styles.fallbackContainer}>
                <TouchableOpacity onPress={handleCopy} style={styles.copyButtonContainer}>
                    <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
                <Text style={styles.codeText}>{data}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
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
        marginBottom: 16,
    },
    fallbackText: {
        fontFamily: 'monospace',
        color: '#666',
    },
    codeText: {
        fontFamily: 'monospace',
        color: '#333',
    },
    copyButtonContainer: {
        alignSelf: 'flex-end',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#007bff',
        borderRadius: 4,
        marginBottom: 20,
    },
    copyButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    exampleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "black",
        marginBottom: 0,
    },

    exampleHeader: { flex: 1, flexDirection: 'row', justifyContent: "space-between" }
});

export default SyntaxHighlighterComponent;
