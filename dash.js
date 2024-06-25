import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function DashBoard() {
  const handleMenuItemPress = (label) => {
    console.log(`Pressed ${label}`);
    // Implement your logic here
  };

  const MenuItem = ({ iconSource, label, onPress }) => (
    <TouchableOpacity style={Stylers.menuItem} onPress={() => onPress(label)}>
      <Image source={iconSource} style={Stylers.icon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );

  const Menu = () => {
    return (
      <View style={Stylers.menuContainer}>
        <MenuItem iconSource={require('./assets/rent.png')} label="View Houses" onPress={handleMenuItemPress} />
        <MenuItem iconSource={require('./assets/pay.png')} label="Make Payments" onPress={handleMenuItemPress} />
        <MenuItem iconSource={require('./assets/statement.png')} label="View Statements" onPress={handleMenuItemPress} />
        <MenuItem iconSource={require('./assets/report.png')} label="Reports" onPress={handleMenuItemPress} />
        <MenuItem iconSource={require('./assets/info.png')} label="General Enquiries" onPress={handleMenuItemPress} />
        <MenuItem iconSource={require('./assets/add.png')} label="" onPress={handleMenuItemPress} />
      </View>
    );
  };

  return (
    <SafeAreaView style={Stylers.dashcont}>
      <StatusBar style='auto' />
      <View style={Stylers.forlogo}>
        <Image style={Stylers.logo} source={require('./assets/logo.png')} />
      </View>

      <Image style={Stylers.forsplash} source={require('./assets/plash.png')} />

      <View style={Stylers.searchbar}>
        <Image style={Stylers.searchicon} source={require('./assets/search.png')} />
        <TextInput style={Stylers.searchinput} placeholder='Search' />
      </View>

      <Menu />
    </SafeAreaView>
  );
}

const Stylers = StyleSheet.create({
  btn: {
    width: '' // Update as necessary
  },
  tablogo: {
    width: 40,
    height: 30,
  },
  formenu: {
    flex: 1,
    height: '36%',
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
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
  forlogo: {},
  lash: {
    alignSelf: 'center',
  },
  dashcont: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: "5%",
    paddingBottom: '3%',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '36%', // Adjust height based on your design
    width: "100%",
  },
  menuItem: {
    alignItems: 'center',
    width: '33%',
    marginVertical: 10,
    marginTop: 20,
  },
  icon: {
    width: 60,
    height: 50,
  },
  last: {
    left: '-20%',
  },
});
