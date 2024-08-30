import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import axios from 'axios';
const { width } = Dimensions.get('window')
export default function LoginScreen({ navigation }) {
    const SvgTop = () => {
        return (
            <Svg
                width={500}
                height={324}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
                    fill="url(#prefix__paint0_linear_103:6)"
                    fillOpacity={0.5}
                />
                <Path
                    d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
                    fill="url(#prefix__paint1_linear_103:6)"
                />
                <Defs>
                    <LinearGradient
                        id="prefix__paint0_linear_103:6"
                        x1={492.715}
                        y1={231.205}
                        x2={480.057}
                        y2={364.215}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#FFFF" />
                        <Stop offset={1} stopColor="#5066A7" />
                    </LinearGradient>
                    <LinearGradient
                        id="prefix__paint1_linear_103:6"
                        x1={7.304}
                        y1={4.155}
                        x2={144.016}
                        y2={422.041}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#99b5f7" />
                        <Stop offset={1} stopColor="#6b8fef" />
                    </LinearGradient>
                </Defs>
            </Svg>
        )
    }
    // const [user, setUser] = useState([])
    // useEffect(() => {
    //     const getAllUser = async () => {
    //         const request = await axios.get("http://192.168.1.109:8082/api/v1/users/");
    //         const response = await request;
    //         setUser(response.data);
    //         console.log(user);
    //     }
    //     getAllUser();
    // }, [])


    const logIn = () => {
        navigation.navigate('Drawer')
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerSVG}>
                <SvgTop />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Hello</Text>
                <Text style={styles.subTitle}>Sign In to Your account</Text>
                <TextInput
                    placeholder="example@correo.com"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="password"
                    style={styles.textInput}
                />
                <TouchableOpacity style={styles.button} onPress={logIn}>
                    <Text style={styles.text}>SIGN </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1f1f1',
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSVG: {
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: '#34434D',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 20,
        color: 'gray',
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    forgotPassword: {
        fontSize: 14,
        color: 'gray',
        marginTop: 20
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 45,
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#99b5f7"
    },

});
