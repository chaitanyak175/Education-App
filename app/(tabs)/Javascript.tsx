import { View, Text } from 'react-native'
import React from 'react'
import ScrollViewComponent from '@/components/ui/ScrollViewComponent'
import { javascriptInformation } from '@/constants/Information'


const Page = () => {
    return (
        <ScrollViewComponent data={javascriptInformation.topics} language='javascript' />
    )
}


export default Page