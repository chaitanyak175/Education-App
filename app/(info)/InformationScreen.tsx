import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import InformationCard from '@/components/ui/InformationCard'
import { useLocalSearchParams } from "expo-router";


const Page = () => {

    // In Page.tsx
    const { data, title, language } = useLocalSearchParams();
    const parsedData = data ? JSON.parse(data as string) : null;

    // Find the selected topic based on the title
    const selectedTopic = parsedData ? parsedData.find((topic: any) => topic.name === title) : null;

    console.log('Selected topic title:', title);
    console.log('Selected topic subtopics:', selectedTopic?.subtopics);

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <InformationCard data={selectedTopic} title={title as string} language={language as string}>
            </InformationCard>
        </ScrollView>
    )
}

export default Page