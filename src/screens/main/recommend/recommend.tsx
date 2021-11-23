import React from 'react'
import {ScrollView} from 'native-base'

import RecommendCard from './recommendCard'

export default function Recommend() {
  return (
    <ScrollView bg="white">
      <RecommendCard />
    </ScrollView>
  )
}
