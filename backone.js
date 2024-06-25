import React, { useState, useEffect } from 'react';
import { View,Image, Text, TextInput, Button, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import DashBoard from './dash';
import Maincont from './NAVIGATION/Maincont';


const firebaseConfig = {
  apiKey: "AIzaSyDjNw56wdME-m08v-bxMf3NODd4gcAvr9U",
  authDomain: "bwbhc-939aa.firrebaseapp.com",
  projectId: "bwbhc-939aa",
  storageBucket: "bwbhc-939aa.appspot.com",
  messagingSenderId: "408379258697",
  appId: "1:408379258697:web:d01784891cfc39ea4e0c98",
  measurementId: "G-H0W0EL6Z8N"
};
const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
 
  

  return (
    <View style={styles.authContainer}>
      <View>
     
     
      <Image source={require('./assets/menu.png')} style={styles.menuControl} />
      
      <View style={styles.forlogin}>
        <Image style={styles.logosty} source={require('./assets/logo.png')}/>
      </View>
       <View style={styles.forinput}>
       <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
    
    <TextInput
     style={styles.input}
     value={email}
     onChangeText={setEmail}
     placeholder="Email"
     autoCapitalize="none"
   />
   <TextInput
     style={styles.input}
     value={password}
     onChangeText={setPassword}
     placeholder="Password"
     secureTextEntry
   />
   <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.btnlog} onPress={handleAuthentication} color="#3498db" >
       <Text style={styles.logtext}>
       {isLogin ? 'Sign In' : 'Sign Up'}
       </Text>
     </TouchableOpacity>
   </View>
       </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
      </View>
    </View>
  );
}

function op(){
  console.log("kakaskdh")
}

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (// this is code for next screen after logging in
    <View style={styles.authContainer}>
      {/* <Text style={styles.title}>Welcome</Text>
      <Text style={styles.elomailText}>{user.email}</Text>*/
      //  <Button title="Logout" onPress={handleAuthentication}  color="#e74c3c" />
       }
      <Maincont/>
    </View>
  );
};
export default Getin= () => {

  //Authentication code
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  
  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
         op();
        } else {
          // Sign up
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        // Show user's email if user is authenticated
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        // Show sign-in or sign-up form if user is not authenticated
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logtext:{
 fontWeight:'bold',
 alignSelf: 'center',
 verticalAlign:'center',
paddingTop:10,
 color:"#AD2524"
  },
  forinput:{
  paddingTop:'8%',
  },
  container: {
    top: '5%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    backgroundColor: '#fff',
    padding: 0,
    borderRadius: 8,
    width:"100%",
    height:"100%"
  },
  forlogin:{
   paddingTop:'10%'
  },
  btnlog:{
 height:40,
 alignContent:"center",
  },
  logosty:{
    alignItems:'center',
    width:"87%",
    left: "8%",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth:1,
     width:300,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    alignSelf:'center',
    marginBottom : 30,
  },
  buttonContainer: {
    marginBottom: 16,
    backgroundColor:'#FAA21B',
    borderRadius: 8,
    width:300,
    alignSelf:'center',
    height: 50,
  },
  toggleText: {
    color: '#faa21b',
    textAlign: 'center',
      
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuControl:{
    width: 30,
    height:50,
    left: 20,

  },
  sideMenu: {
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: 300,
  backgroundColor: '#fff',
  padding: 20,
  borderRightWidth: 1,
  borderRightColor: '#ccc',
},
});