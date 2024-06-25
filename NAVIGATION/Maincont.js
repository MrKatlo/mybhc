import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import Statements from './statements';
import Settings from './settings.js';
import Profile from './profile';
import DashBoard from '../dash';

// Import all tab icons
import homeIcon from '../assets/home.png';
import chatIcon from '../assets/chat.png';
import settingsIcon from '../assets/settings.png';
import profileIcon from '../assets/person.png';

export default function Maincont() {
    const [selectedTab, setSelectedTab] = useState('Home');

    const renderScreen = () => {
        switch (selectedTab) {
            case 'Home':
                return <DashBoard />;
            case 'Chat':
                return <Statements />;
            case 'Settings':
                return <Settings />;
            case 'Profile':
                return <Profile />;
            default:
                return null;
        }
    };

    // Object mapping for tab icons
    const tabIcons = {
        Home: homeIcon,
        Chat: chatIcon,
        Settings: settingsIcon,
        Profile: profileIcon,
    };

    const renderTab = (tabName, iconName, label) => {
        const isSelected = selectedTab === tabName;

        return (
            <TouchableOpacity
                key={tabName}
                style={[styles.tabButton, isSelected && styles.selectedTab]}
                onPress={() => setSelectedTab(tabName)}
            >
                <Image
                    style={styles.tabIcon}
                    source={tabIcons[tabName]} 
                />
                <Text style={[styles.tabLabel, isSelected && styles.selectedLabel]}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {renderScreen()}
            </View>
            <View style={styles.tabBar}>
                {renderTab('Home', homeIcon, 'Home')}
                {renderTab('Chat', chatIcon, 'Chat')}
                {renderTab('Settings', settingsIcon, 'Settings')}
                {renderTab('Profile', profileIcon, 'Profile')}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007AFF',
    },
    tabIcon: {
        width: 34,
        height: 34,
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 2,
    },
    selectedLabel: {
        color: '#007AFF',
    },
});
