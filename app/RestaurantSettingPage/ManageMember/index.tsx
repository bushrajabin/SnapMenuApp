import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import UserInput from "@/components/UserInput";
import Buttons from "@/components/Buttons";
import NavSideBar from "@/components/NavSideBar";

const ManageMembers = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMemberAvailable, setIsMemberAvailable] = useState(false);

  const addMember = () => {
    if (email && password) {
      setIsMemberAvailable(true);
      Alert.alert("Successfully member added!!!");
    } else {
      Alert.alert("All fields are required DUFFER!!!");
    }
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View>
        <NavSideBar title={"Manage Member"} />
      </View>

      <View style={Styles.addItemContainer}>
        <Text style={Styles.text}>Add New Member</Text>
        <View>
          <UserInput
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <UserInput
            placeholder="Enter Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={Styles.addButton}>
          <Buttons title={"Add member"} onPress={addMember} />
        </TouchableOpacity>

        {isMemberAvailable ? (
          <View style={Styles.memberDetails}>
            <Text style={Styles.text1}>Existing Member</Text>
            <View style={Styles.emailSection}>
              <Text style={Styles.text2}>Email: {email}</Text>
              <TouchableOpacity>
                <Text style={Styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={Styles.availableNot}>
            <Text style={Styles.text1}>Existing Member</Text>
            <Text style={Styles.text2}>No members added yet...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default ManageMembers;

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  addItemContainer: {
    paddingTop: 40,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: 40,
  },
  addButton: {
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },
  availableNot: {
    marginTop: 10,
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  memberDetails: {
    marginTop: 10,
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
    marginVertical: 5,
  },
  emailSection: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    marginHorizontal: 25,
  },
  removeButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 6,
    borderRadius: 5,
  },
});
