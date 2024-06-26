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
      <Image source={iconSource} style={Stylers.icon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
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
  };

  // Render component
  return (
    <View style={Stylers.container}>
      <View style={Stylers.container}>
        {getCurrentView()}
      </View>
   
      
    </View>
  );
}

const Stylers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItem: {
    alignItems: 'center',
    width: '33%',
    marginVertical: 10,
    marginTop: 20,
  },
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
});
