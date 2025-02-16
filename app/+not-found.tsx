import React from "react";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
      <Text style={styles.container}>error</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

});
