import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Service = () => {
  return (
    <View style={{
      paddingVertical: 30,
      gap: 50,
      backgroundColor: 'lightblue',
      flex: 1

    }}>
      <View style={{
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderRadius: 25,
        width: 300,
        marginHorizontal: 30
      }}>
        <Text style={{
          color: 'white',
          fontSize: 30
        }}>Service</Text>
      </View>

      <View  style={{
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        borderRadius: 25,
        width: 300,
        marginHorizontal: 30
      }}>
        <Link style={{
          color: 'white',
          fontSize: 30
        }} href={'/'}>Back to Home</Link>
      </View>

    </View>

  )
}

export default Service