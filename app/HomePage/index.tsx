import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, Alert, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Buttons from "@/components/Buttons";
import NavSideBar from "@/components/NavSideBar";
import { Colors } from "@/constants/Colors";
const logoimage = require("../../assets/images/snapLogo.png");
export default function HomePage() {
  const isDarkMode = useColorScheme() === "dark"
  return (
    // <SafeAreaView style={Styles.container}>
    <SafeAreaView style={[Styles.container, { backgroundColor: isDarkMode ? Colors.light.background : Colors.dark.background }]}>
      <View style={Styles.TopContainer}>
        <Image source={logoimage} style={Styles.logoImage} />
        <NavSideBar title="" />
      </View>
      <Text style={Styles.Text}>Available Menus</Text>
      <TouchableOpacity style={Styles.button}>
        <Buttons
          title={"Add Menu"}
          onPress={() => router.navigate("/AddMenu")}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    zIndex:-1,
    elevation:0
  },
  TopContainer: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "green"
  },
  logoImage: {
    width: "60%",
    // height: 100,
    objectFit: "contain",
  },
  Text: {
    textDecorationLine: "underline",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
    margin: "auto",
    elevation:1,
    zIndex:1
  },
});
