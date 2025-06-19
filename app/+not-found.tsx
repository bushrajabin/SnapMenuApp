import React from "react";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
export default function NotFoundScreen() {
  return (
    <>
      <Text style={styles.container}>404|This page could not be found</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
    margin: "auto",
    fontSize: 20
  },

});
