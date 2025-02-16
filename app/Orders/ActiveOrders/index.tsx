import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NavSideBar from "@/components/NavSideBar";

export default function ActiveOrders() {
  return (
    <SafeAreaView>
      <View>
        <NavSideBar title={"Active Orders"} />
      </View>
      <View>
        <Text style={{textAlign:"center"}}>ActiveOrders</Text>
      </View>
    </SafeAreaView>
  );
}
