import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import UserInput from "@/components/UserInput";
import Buttons from "@/components/Buttons";

export default function RegisterRestaurant() {
  const [UserName, setUserName] = useState<string>("");
  const [City, setCity] = useState<string>("");
  const [RestaurentName, setRestaurentName] = useState<string>("");
  const [GST, setGST] = useState<number>();

  const toHomePage = () => {
    if (!UserName || !City || !RestaurentName || !GST) {
    Alert.alert("0ooppss");
    } else {
      router.navigate("/HomePage");
    }
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.topContainer}>
        <Text style={Styles.text1}>Enter Details</Text>
        <Text style={Styles.text2}>Of Your Restaurant</Text>
      </View>
      <View>
        <View>
          <UserInput
            placeholder="Enter your name"
            value={UserName}
            onChangeText={setUserName}
          />
          <UserInput
            placeholder="Enter your restaurent name"
            value={RestaurentName}
            onChangeText={setRestaurentName}
          />
          <UserInput
            placeholder="Enter City"
            value={City}
            onChangeText={setCity}
          />
          <UserInput
            placeholder="Enter GST in percentage"
            value={GST}
            onChangeText={setGST}
          />
        </View>

        <TouchableOpacity style={Styles.button} >
          <Buttons title={"Get Started"} onPress={toHomePage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  text1: {
    fontSize: 30,
    paddingBottom: 10,
  },
  text2: {
    color: "green",
    fontSize: 30,
  },
  button:{
    marginHorizontal:50,
    marginTop:40
  }
});
