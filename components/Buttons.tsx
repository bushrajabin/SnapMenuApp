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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 8,
    shadowRadius: 2,
    backgroundColor:"black",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color:"white",
  },
});
