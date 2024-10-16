import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <>
     <View>
      <Text>Home</Text>
      <Link href={"about"}>About</Link>
      <Link href={"contact"}>Contact</Link>
      <Link href={"service"}>Service</Link>
    </View>



    </>
 )
}

export default Home