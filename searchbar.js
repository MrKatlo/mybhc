import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function DefaultUi() {
  return (
    <SafeAreaView style={Stylers.dashcont}>
      <StatusBar style='auto' />
      
    
  
        <View style={Stylers.forlogo}>
          <Image style={Stylers.logo} source={require('./assets/logo.png')} />
        </View>
     

    
      <View style={Stylers.forsplash}>
        <ImageBackground
          source={require('./assets/plash.png')} // Replace with your image source
          style={Stylers.imageBackground}
          resizeMode="cover" // Cover ensures the image fills the entire area
        />
      </View>

      <View style={Stylers.searchbar}>
        <Image style={Stylers.searchicon} source={require('./assets/search.png')} />
        <TextInput style={Stylers.searchinput} placeholder='Search' />
      </View>
      
    </SafeAreaView>
  );
}

const Stylers = StyleSheet.create({
  imageBackground: {
    width: '100%', // Image should fill the entire container width
    height: '100%', // Image should fill the entire container height
    justifyContent: 'center',
    alignItems: 'center',
  },
  forsplash: {
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%', // Ensure the entire width of the parent is covered
    height: 280, // Set an appropriate height or adjust dynamically
    marginTop: 20, // Adjust as needed
  },
  searchicon: {
    marginLeft: 10,
    width: 40,
    height: '50%',
    marginTop: 19,
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
    paddingBottom: 1,
    marginBottom: 10,
  },
  forlogo: {
    alignSelf:'flex-start',
    paddingLeft:10,
  
  },
  dashcont: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: "5%",
    paddingBottom: '3%',
    alignItems: 'center',
  },
  logo: {
    width: 50, // Adjust width as needed
    height: 50, // Fixed height for the logo
    alignSelf: 'flex-start',
    
  }
});

export default DefaultUi;
