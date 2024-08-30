import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>HomeScreen</Text>
            </View>
            <View>
                <Button title="Learn More" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
})