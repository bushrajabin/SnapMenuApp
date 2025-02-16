import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Buttons({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={Styles.buttonContainer}>
      <Text onPress={onPress} style={Styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: Colors.dark.background,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 15,
  },
});
