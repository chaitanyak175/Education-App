import { View, Text } from 'react-native'
import React from 'react'
import ScrollViewComponent from '@/components/ui/ScrollViewComponent'
import { javaInformation } from '@/constants/Information'


const Page = () => {
  return (
    <ScrollViewComponent data={javaInformation.topics}/>
  )
}

export default Page