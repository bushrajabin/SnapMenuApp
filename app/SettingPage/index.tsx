import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Setting } from "@/components/Common";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Buttons from "@/components/Buttons";
export default function SettingPage() {
  const [inputFields, setInputFields] = useState(Setting.inputFields);

  const handleInputChange = (value: string, index: number) => {
    // Validate number fields
    if (
      index === 2 || // Number of Tables field
      index === 3 // Contact Number field
    ) {
      if (!/^\d*$/.test(value)) {
        Alert.alert("Invalid Input", "Please enter only numeric values.");
        return;
      }
      if (value.length > 10) {
        Alert.alert("Invalid Input", "Number cannot exceed 10 digits.");
        return;
      }
    }

    const updatedFields = [...inputFields];
    updatedFields[index].input = value;
    setInputFields(updatedFields);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Input Fields */}
        {inputFields.map((field, index) => (
          <TextInput
            key={index}
            style={styles.inputField}
            placeholder={field.title}
            value={field.input}
            onChangeText={(value) => handleInputChange(value, index)}
            keyboardType={
              index === 2 || index === 3 ? "numeric" : "default" // Use numeric keyboard for specific fields
            }
          />
        ))}
      </View>

      {/* Operating Hours and Days */}
      <View>
        <View style={styles.endContainer}>
          <Text style={styles.title}>Operating Hours</Text>
          <View style={styles.operatingDaysContainer}>
            {Setting.hours.map((hour, index) => (
              <Text key={index} style={styles.text}>
                {hour}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.endContainer}>
          <Text style={styles.title}>Operating Days</Text>
          <View style={styles.operatingDaysContainer}>
            {Setting.day.map((day, index) => (
              <Text key={index} style={styles.text}>
                {day}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <Buttons
        title={"Save Changes"}
        onPress={() => router.navigate("/AddMenu")}
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: "#f9f9f9",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "100%",
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 6,
  },
  endContainer: {
    alignItems: "flex-start",
  },
  operatingDaysContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    marginVertical: 10,
    marginHorizontal: 7,
    color: "#555",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    width: 91,
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderColor: "grey",
  },
});
