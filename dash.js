import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, ScrollView, Touchable, TouchableOpacity, SafeAreaView } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import style from './backone'
import { StatusBar } from 'expo-status-bar';


const firebaseConfig = {
    apiKey: "AIzaSyDjNw56wdME-m08v-bxMf3NODd4gcAvr9U",
    authDomain: "bwbhc-939aa.firebaseapp.com",
    projectId: "bwbhc-939aa",
    storageBucket: "bwbhc-939aa.appspot.com",
    messagingSenderId: "408379258697",
    appId: "1:408379258697:web:d01784891cfc39ea4e0c98",
    measurementId: "G-H0W0EL6Z8N"
};

export default function DashBoard() {
    return (
        <SafeAreaView style={Stylers.dashcont}>
            <View style={Stylers.forlogo}>
                <Image style={Stylers.logo} source={require('./assets/logo.png')} />
            </View>

            <Image style={Stylers.forslash} source={require('./assets/plash.png')} />

            <View style={Stylers.searchbar}>
                <Image style={Stylers.searchicon} source={require('./assets/search.png')} />
                <TextInput style={Stylers.searchinput} placeholder='Search' ></TextInput>
            </View>
            <View style={Stylers.formenu}>

            <Image source={require('./assets/rent.png')} style={Stylers.menuLogo} />
            <Text>View Housing</Text>
            <Image source={require('./assets/pay.png')} style={Stylers.menuLogo} />
            <Text>Payments</Text>
            <Image source={require('./assets/statement.png')} style={Stylers.menuLogo} />
            <Text>Staments</Text>
            <Image source={require('./assets/report.png')} style={Stylers.menuLogo} />
            <Text>Reporting</Text>
            <Image source={require('./assets/info.png')} style={Stylers.menuLogo} />
            <Text>Enquiries</Text>
            
           
            </View>
            { <View style={Stylers.tabs}>
                <View>
                    <Image style={Stylers.tablogo} source={require('./assets/home.png')} />
                </View>
                <View>
                    <Image style={Stylers.tablogo} source={require('./assets/chat.png')} />
                </View>
                <View>
                    <Image style={Stylers.tablogo} source={require('./assets/settings.png')} />
                </View>
                <View>
                    <Image style={Stylers.tablogo} source={require('./assets/person.png')} />
                </View>
            </View>}
        </SafeAreaView>
    )
}

const Stylers = StyleSheet.create({
    tabs: {
        flex: 1,
        justifyContent: 'space-between', // Align content to the bottom
        alignItems: 'center', // Center horizontally if needed
        flexDirection:"row",
        width:"90%",
        alignSelf:"center"
    },
    tablogo:{
        width: 40,
        height: 40,
        padding:10
    },
    formenu:{
    flex:1,
height:'36%',
width:'100%',
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between",
padding: 10

    },
    menuLogo:{
        height:90,
        width:70,
        resizeMode:"cover"
    },
    logo: {
        alignSelf: 'flex-start',
        width: 55,
        height: 40,
      
    },
    forsplash: {
        alignSelf: 'flex-start',
        width: "100%",
        height: '40%',
        backgroundColor: "black",


    },
    searchicon: {
        verticalAlign: 'center',
        width: 40,
        height: '50%',
        marginTop: 19,
        marginLeft: 10,
    },
    searchinput: {
        fontSize: 18,
        color: "#AD2524"
    },
    searchbar: {
        width: '95%',
        height: 60,
        borderWidth: 2,
        borderColor: '#AD2524',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 27,
        flexDirection: "row",
        gap: 5,
        paddingBottom:1,
        marginBottom :10,
    },
    forlogo: {

    },
    lash: {
        alignSelf: 'center',


    },
    dashcont: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: "0.5%",
        paddingBottom: '3%',
    }
});