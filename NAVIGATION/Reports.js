import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker, View, Image, Text, TextInput, StyleSheet, ImageBackground, SafeAreaView  } from 'react-native';
import {useNavigation } from "@react-navigation/native";

const Reports = () => {
  // Replace these dummy data arrays with your actual data sources
  const pendingReports = [
    { id: 1, title: 'Electrical Fault' },
    { id: 2, title: 'Water Leakage' },
    // ... other pending reports
  ];

  const completedReports = [
    { id: 101, title: 'Report on Masonry' },
    { id: 102, title: 'Report on Plumbing' },
    // ... other completed reports
  ];

  const [selectedPendingReport, setSelectedPendingReport] = useState(null);
  const [selectedCompletedReport, setSelectedCompletedReport] = useState(null);
  const navigation = useNavigation();
  const handleNewReport = () => {
   navigation.navigate('Faults.js');
  };

  return (
    <View>
      <Text>CALL REPORTING</Text>
      <Button title="Make New Report" onPress={handleNewReport} />

      {/* Dropdown for Pending Reports */}
      <Text>Pending Reports:</Text>
      <Picker
        selectedValue={selectedPendingReport}
        onValueChange={(itemValue) => setSelectedPendingReport(itemValue)}
      >
        {pendingReports.map((report) => (
          <Picker.Item key={report.id} label={report.title} value={report.id} />
        ))}
      </Picker>

      {/* Dropdown for Completed Reports */}
      <Text>History of Reports:</Text>
      <Picker
        selectedValue={selectedCompletedReport}
        onValueChange={(itemValue) => setSelectedCompletedReport(itemValue)}
      >
        {completedReports.map((report) => (
          <Picker.Item key={report.id} label={report.title} value={report.id} />
        ))}
      </Picker>
      {/* Add additional prompts and options for specific faults here */}
    </View>
  );
};

export default Reports;
