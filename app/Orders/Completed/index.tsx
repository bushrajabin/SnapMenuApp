import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NavSideBar from "@/components/NavSideBar";

export default function Completed() {
  return (
    <SafeAreaView>
      <View>
        <NavSideBar title={"Completed Orders"} />
      </View>
      <View>
        <Text>Completed</Text>
      </View>
    </SafeAreaView>
  );
}
