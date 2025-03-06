import { View, Text } from 'react-native'
import React from 'react'
import ScrollViewComponent from '@/components/ui/ScrollViewComponent'
import { pythonInformation } from '@/constants/Information'


const Page = () => {
    return (
        <ScrollViewComponent data={pythonInformation.topics} language='python' />
    )
}

export default Page