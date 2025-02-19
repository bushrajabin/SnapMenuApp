import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationComponent() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            // Check if the platform is Android
            if (Platform.OS !== 'android') {
                setErrorMsg('This app currently supports Android only.');
                return;
            }

            // Request location permission for Android
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            try {
                // Get the current location
                const currentLocation = await Location.getCurrentPositionAsync({});
                setLocation(currentLocation);
            } catch (error) {
                setErrorMsg('Failed to get location.');
            }
        }

        // Call the function to get location when component mounts
        getCurrentLocation();
    }, []);

    let displayText = 'Waiting for location...';

    if (errorMsg) {
        displayText = errorMsg;
    } else if (location) {
        displayText = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Get Location!!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"red",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
