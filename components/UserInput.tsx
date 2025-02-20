import React from "react";
import { SafeAreaView, View, TextInput, StyleSheet, Text } from "react-native";

export default function UserInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: {
  placeholder: string;
  value: any;
  onChangeText: (text: any) => void;
  secureTextEntry?: boolean;
}) {
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 17,
    borderWidth: 1,
    borderColor: "grey",
  },

});
