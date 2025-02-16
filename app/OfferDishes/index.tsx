import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { offerDishes } from "@/components/Common";
import { router } from "expo-router";
import Buttons from "@/components/Buttons";
export default function OfferDishes() {
  const [values, setValues] = useState(offerDishes);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.commonDiv}>
        {values.map((fields, index) => (
          <View key={index} style={Styles.commonInputDiv}>
            <TextInput
              value={fields.input}
              placeholder={fields.title}
            />
            {fields.icon && <Pressable>{fields.icon}</Pressable>}
          </View>
        ))}
      </View>

      <View style={Styles.buttonContainer}>
        <Buttons
          title={"Add to Offer"}
          onPress={()=>router.back()}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  commonDiv: {
    flex: 1,
    paddingVertical: 60,
  },
  commonInputDiv: {
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 7,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 15,
    padding: 10,
  },
  buttonContainer: {
    padding: 10,
  },
});
