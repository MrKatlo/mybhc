

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Maincont from './NAVIGATION/Maincont';
const housesData = [
  { id: 1, name: 'House 1', rent: '$1000/month' },
  { id: 2, name: 'House 2', rent: '$1200/month' },
  { id: 3, name: 'House 3', rent: '$900/month' },
];

const ViewHousesModal = ({ closeModal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Houses Available for Rent</Text>
      <FlatList
        data={housesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.houseContainer}>
            <Text style={styles.houseName}>{item.name}</Text>
            <Text style={styles.houseRent}>{item.rent}</Text>
            <Text style={styles.closeButton} onPress={closeModal}>
        Close
      </Text>
          </View>
        )}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    height: '70%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  houseContainer: {
    marginBottom: 10,
  },
  houseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  houseRent: {
    fontSize: 14,
    color: 'gray',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: -10,

   backgroundColor:"red"
  },
});

export default ViewHousesModal;
