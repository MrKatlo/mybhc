import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const HousesScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>Find your dream</Text>
        <Text style={styles.lil}>home</Text>
        <Text style={styles.goBack}>Back</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchbar}>
          <Image source={require('./assets/search.png')} style={styles.icon} />
          <Text>Search by Location</Text>
        </TouchableOpacity>
        <Image source={require('./assets/home.png')} style={styles.tune} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Properties</Text>
          <Text style={styles.headerOption}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.propertiesList}>
          <View style={styles.propertyCard}>
            <Image source={{ uri: 'your_image_url' }} style={styles.propertyImage} />
            <Text style={styles.propertyTitle}>5 Bedroom House Block 8, Gaborone</Text>
            <Text style={styles.propertyPrice}>BWP 4,499 000</Text>
          </View>
          {/* Repeat for other properties */}
        </ScrollView>

        <View style={styles.header}>
          <Text style={styles.newListingsTitle}>New Listings</Text>
          <Text style={[styles.headerOption, styles.listOp]}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newListingsList}>
          <View style={styles.propertyCard}>
            <Image source={{ uri: 'your_image_url' }} style={styles.propertyImage} />
            <Text style={styles.propertyTitle}>3 Bedroom House Block 6, Gaborone</Text>
            <Text style={styles.propertyPrice}>BWP 2,299 000</Text>
          </View>
          {/* Repeat for other new listings */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerOption: {
    fontSize: 16,
    color: '#faa21b',
  },
  propertiesList: {
    paddingVertical: 10,
  },
  newListingsList: {
    paddingVertical: 10,
  },
  propertyCard: {
    width: 300,
    marginRight: 10,
  },
  propertyImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  propertyPrice: {
    fontSize: 16,
    color: '#333',
  },
  newListingsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    paddingLeft: 20,
  },
  heading: {
    color: "#ad2524",
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  goBack: {
    color: "#ad2524",
    fontSize: 20,
    position: 'relative',
    right: "-80%",
    top: "-24%",
  },
  lil: {
    color: "#ad2524",
    fontSize: 20,
    fontWeight: '400',
  },
  searchbar: {
    width: 200,
    height: 50,
    borderRadius: 40,
    borderColor: "#ad2524",
    borderWidth: 2,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  icon: {
    color: "black",
  },
  tune: {
    width: 50,
    height: 50,
    left: '70%',
    top: '-50%',
  },
  listOp: {
    top: -10,
    left: "50%",
    position: 'relative',
  }
});

export default HousesScreen;
