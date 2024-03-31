import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import FlatCard from './components/FlatCard'
import FancyCard from './components/FancyCard'
import ElevatedCard from './components/ElevatedCard'
import LoginButton from './components/LoginButton'

const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor:'black', flex:1}} >
        <ScrollView>
        {/* <FancyCard/> */}
        <LoginButton/>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App