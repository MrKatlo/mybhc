import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { StyleSheet, Image, Text, TextInput,NavigationContainer, Button, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landing from './landing';
// component for login screen
export default function login() {
  //to get username and password output
  const [usname, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  //action for login btn
  function logs() {
    const stack= createNativeStackNavigator()
    return(
       <NavigationContainer>
         <stack.Navigator>
          <stack.Screen name='landing' component={landing}/>
         </stack.Navigator>
       </NavigationContainer>
    )
  
  }
  return (
    <>
      <View style={styles.toppanel}>
        <Image style={styles.iconimage} source={require('./assets/menu.png')} />
        <Text style={styles.txtreg}>Register</Text>
      </View><View style={styles.forlogo}>
        <Image style={styles.logoimage} source={require('./assets/logo.png')} />
      </View>

      <View style={styles.forinputs}>
        <Text style={styles.txtlogin}>Log in with your credentials.</Text>
        <TextInput style={styles.username}
          onChangeText={username => setUsername(username)}
          defaultValue={usname}
          placeholder='Username' />
        <TextInput style={styles.username}
          onChangeText={password => setPassword(password)}
          defaultValue={pass}
          placeholder='Password' />
        <Text style={styles.txtforgot}>Forgot your username or password?</Text>
        <TouchableOpacity style={styles.btnlog}
          onPress={logs}
        >

          <Text style={styles.txtloginow}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
//testing the button/trying how to use it--backhandler api ---failed
function btnlogin(){
  useEffect(()=>{
   const backAction = () =>{
    console.log("tried to log in")
    return false;
    return true;
   }
  });

  const backhandler=BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  )
}

const styles = StyleSheet.create({


  txtlogin: {
    color: "black",
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: "center"
  },
  txtloginow: {
    color: "white",
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: "center"
  },
  txtforgot: {
    color: "#FAA21B",
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: "center"
  },
  forlogo: {
    alignSelf: "center"
  },
  forinputs: {
    paddingTop: 50
  },
  username: {
    borderWidth: 1.7,
    borderRadius: 8,
    height: 48,
    width: 330,
    alignSelf: "center",
    marginTop: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  btnlog: {
    borderWidth: 1.7,
    borderRadius: 8,
    height: 58,
    width: 330,
    backgroundColor: "#FAA21B",
    alignSelf: "center",
    marginTop: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },

  toppanel: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: 'space-between',

  },
  iconimage: {
    width: 35,
    height: 35,
  },
  logoimage: {
    width: 300,
    height: 200,

  },
  txtreg: {
    color: "#FAA21B",
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
  txtlogin: {
    color: "black",
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: "center"
  },
  txtloginow: {
    color: "white",
    paddingTop: 12,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: "center"
  },
  txtforgot: {
    color: "#FAA21B",
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: "center"
  },
  forlogo: {
    alignSelf: "center"
  },
  forinputs: {
    paddingTop: 50
  },
  username: {
    borderWidth: 1.7,
    borderRadius: 8,
    height: 48,
    width: 330,
    alignSelf: "center",
    marginTop: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  btnlog: {
    borderWidth: 1.7,
    borderRadius: 8,
    height: 58,
    width: 330,
    backgroundColor: "#FAA21B",
    alignSelf: "center",
    marginTop: 20,
    textAlignVertical: "center",
    textAlign: "center",
  },

});


