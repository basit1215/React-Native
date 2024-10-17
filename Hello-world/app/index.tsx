import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View style={{
            backgroundColor: 'lightblue',
            flex: 1
        }}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'pink',
                justifyContent: 'space-around',
                alignItems: "center",
                gap: 30,
                width: 360,
                height: 60,
                marginBottom: 180,
            }}>
                <Link style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'purple'
                }} href={'/about'}>About</Link>
                <Link style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'purple'
                }} href={'/contact'}>Contact</Link>
                <Link style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'purple'
                }} href={'/service'}>Service</Link>
            </View>

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
                }}>Hello World</Text>
            </View>
        </View>
    )
}

export default Home