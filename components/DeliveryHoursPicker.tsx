import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from '@expo/vector-icons/Entypo';

const DeliveryHoursPicker = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    // DateTimepicker models initially unvisible
    const [isStartPickerVisible, setStartPickerVisible] = useState(false);
    const [isEndPickerVisible, setEndPickerVisible] = useState(false);

    // Functions to show hide date time picker
    const showStartPicker = () => setStartPickerVisible(true);
    const hideStartPicker = () => setStartPickerVisible(false);
    const showEndPicker = () => setEndPickerVisible(true);
    const hideEndPicker = () => setEndPickerVisible(false);

    const handleStartConfirm = (time: any) => {
        setStartTime(time);
        hideStartPicker();
    };

    const handleEndConfirm = (time: any) => {
        setEndTime(time);
        hideEndPicker();
    };

    const formatTime = (time: any) => {
        if (!time) return "00:00";
        return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={{ fontSize: 14, marginBottom: 10,color:"grey" ,fontWeight:"bold"}}>Delivery Hours:</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={showStartPicker} style={styles.timeBox}>
                    <Text>{formatTime(startTime)}</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>to</Text>
                <TouchableOpacity onPress={showEndPicker} style={styles.timeBox}>
                    <Text>{formatTime(endTime)}</Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isStartPickerVisible}
                mode="time"
                onConfirm={handleStartConfirm}
                onCancel={hideStartPicker}
            />

            <DateTimePickerModal
                isVisible={isEndPickerVisible}
                mode="time"
                onConfirm={handleEndConfirm}
                onCancel={hideEndPicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 10,
        paddingVertical:10
    },
    timeBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        minWidth: 80,
        alignItems: "center",
    },
});

export default DeliveryHoursPicker;
