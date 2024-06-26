<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultUi from './searchbar';
import Pay from './NAVIGATION/payments';
import Reports from './NAVIGATION/Reports';
import Statement from './NAVIGATION/statements';
import Info from './NAVIGATION/info';

export default function DashBoard() {
  const [toshow, setToshow] = useState('');

  const handleMenuItemPress = (label) => {
    setToshow(label); // Update the state with the selected label
  };

  // Menu item component
  const MenuItem = ({ iconSource, label }) => (
    <TouchableOpacity style={Stylers.menuItem} onPress={() => handleMenuItemPress(label)}>
=======
import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, useNavigation } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ReportsScreen from "./ReportsScreen";
import HousesScreen from "./HousesScreen";
import PaymentsScreen from "./PaymentsScreen";
import StatementsScreen from "./StatementsScreen";
import EnquiriesScreen from "./EnquiriesScreen";
import Maincont.js from "./NAVIGATION/Maincont.js";

const Stack = createStackNavigator();

// Component for each menu item
const MenuItem = ({ iconSource, label, routeName }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(routeName);
  };

  return (
    <TouchableOpacity style={Stylers.menuItem} onPress={handlePress}>
>>>>>>> 95331b237b4181265ce3123a9d8bf83cde61ffe0
      <Image source={iconSource} style={Stylers.icon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
<<<<<<< HEAD
const Menu=(
  <View style={Stylers.menuContainer}>
  <MenuItem iconSource={require('./assets/rent.png')} label="View Houses" />
  <MenuItem iconSource={require('./assets/pay.png')} label="Make Payments" />
  <MenuItem iconSource={require('./assets/statement.png')} label="View Statements" />
  <MenuItem iconSource={require('./assets/report.png')} label="Reports" />
  <MenuItem iconSource={require('./assets/info.png')} label="General Enquiries" />
  <MenuItem iconSource={require('./assets/add.png')} label="" onPress={handleMenuItemPress} />
  {/* Add more menu items as needed */}
</View>
)
  // Views components
  const DefaultView = (
    <View>
      <DefaultUi/>
       {Menu}
    </View>
  )
  const PaymentView = <Pay />;
  const ReportsView = <Reports />;
  const StatementsView = <Statement />;
  const InfoView = <Info />;

  // Function to return current view based on toshow state
  const getCurrentView = () => {
    
    switch (toshow) {
      case 'View Houses':
        console.log("See houses");
        return DefaultView;
      case 'Make Payments':
        console.log("Make payments");
        return PaymentView;
      case 'View Statements':
        console.log("View statements");
        // Implement logic for viewing statements
        return StatementsView;
      case 'Reports':
        console.log("View reports");
        // Implement logic for viewing reports
        return ReportsView;
      case 'General Enquiries':
        console.log("General enquiries");
        // Implement logic for general enquiries
        return InfoView;
      default:
        console.log("Unknown action");
        return DefaultView; // Or you can return null if you prefer
    }
=======
};

export default function DashBoard() {
 

  const Menu = () => {
    return (
      <View style={Stylers.menuContainer}>
        <MenuItem iconSource={require('./assets/rent.png')} label="View Houses" routeName= "Houses" />
        <MenuItem iconSource={require('./assets/pay.png')} label="Make Payments" routeName= "Payments"  />
        <MenuItem iconSource={require('./assets/statement.png')} label="View Statements" routeName= "Statements" />
        <MenuItem iconSource={require('./assets/report.png')} label="Reports" routeName= "Reports"  />
        <MenuItem iconSource={require('./assets/info.png')} label="General Enquiries"  routeName= "Enquiries"/>
        <MenuItem iconSource={require('./assets/add.png')} label=""  />
      </View>
    );
>>>>>>> 95331b237b4181265ce3123a9d8bf83cde61ffe0
  };

  // Render component
  return (
    <View style={Stylers.container}>
      <View style={Stylers.container}>
        {getCurrentView()}
      </View>
<<<<<<< HEAD
   
      
    </View>
=======

      <Image style={Stylers.forsplash} source={require('./assets/plash.png')} />

      <View style={Stylers.searchbar}>
        <Image style={Stylers.searchicon} source={require('./assets/search.png')} />
        <TextInput style={Stylers.searchinput} placeholder='Search' />
      </View>
<      NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Houses" component={HousesScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Enquiries" component={EnquiriesScreen} />
        <Stack.Screen name="Payments" component={PaymentsScreen} />
        <Stack.Screen name="Statements" component={StatementsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <Maincont/>
    </SafeAreaView>
>>>>>>> 95331b237b4181265ce3123a9d8bf83cde61ffe0
  );
}

const Stylers = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
=======
  /*btn: {
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
  },*/
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
  /*forlogo: {},
  lash: {
    alignSelf: 'center',
  },*/
  dashcont: {
    flexGrow: 1,
    width: '100%',
>>>>>>> 95331b237b4181265ce3123a9d8bf83cde61ffe0
    backgroundColor: '#fff',
  },
  menuItem: {
    alignItems: 'center',
    width: '33%',
    marginVertical: 10,
    marginTop: 20,
  },
<<<<<<< HEAD
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '36%',
    width: '100%',
  },
  icon: {
    width: 60,
    height: 50,
  },
=======
icon: {
    width: 60,
    height: 50,
  },
  /*last: {
    left: '-20%',
  },*/
>>>>>>> 95331b237b4181265ce3123a9d8bf83cde61ffe0
});
