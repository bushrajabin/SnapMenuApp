import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import * as Location from 'expo-location';

// Define the type for the props
interface UserLocationProps {
    onLocationFetched: (locationData: {
        latitude: number;
        longitude: number;
        street: string;
        city: string;
        state: string;
        country: string;
    }) => void;
}

const UserLocation: React.FC<UserLocationProps> = ({ onLocationFetched }) => {
    // Function to fetch current location
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }

        // Get the current position
        let location = await Location.getCurrentPositionAsync({});

        const { latitude, longitude } = location.coords;

        // Reverse Geocode to get street and state
        let address = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (address.length > 0) {
            const { street, city, region, country } = address[0];
            onLocationFetched({
                latitude,
                longitude,
                street: street || '',
                city: city || '',
                state: region || '',
                country: country || '',
            });
        }
    };

    return (
        <TouchableOpacity style={styles.mainContainer} onPress={getLocation}>
            <EvilIcons name="location" size={20} color="black" />
            <Text style={{ paddingHorizontal: 5, fontSize: 14 }}>Use Current Location</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default UserLocation;
