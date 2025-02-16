import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import Buttons from "@/components/Buttons";
import UserInput from "@/components/UserInput";
const logoImage = require("../../assets/images/snapmenuDark.png");
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Registration() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={logoImage} style={styles.logoImage} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Sign Up</Text>
        <UserInput
          placeholder="Enter Your email"
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <UserInput
          placeholder="Enter Your password"
          value={password}
          onChangeText={setPassword}
        />
        <UserInput
          placeholder="Confirm Your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button}>
          <Buttons
            title={"SignUp"}
            onPress={() => router.navigate("/HomePage")}
          // onPress={() => router.navigate("/RestaurantSettingPage")}
          />
        </TouchableOpacity>

        {/* --Login with options or continue with-- */}
        <View style={styles.continueWithContainer}>
          <Text style={styles.continueWith}> ------Or continue with-----</Text>
          <TouchableOpacity style={styles.GoogleIcon}>
            <Text style={styles.GoogleText}>
              {" "}
              <AntDesign name="google" size={18} /> Google
            </Text>
          </TouchableOpacity>

          {/* Already have an account option */}
          <Link href={"/Login"} style={styles.newAccount}>
            <Text> Already have an account? Log In</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
  },
  topContainer: {
    paddingHorizontal: 50,
    paddingVertical: 40,
  },
  logoImage: {
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  inputContainer: {
    backgroundColor:"white",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    
  },
  continueWithContainer: {
    alignItems: "center",
    gap: 10,
  },
  continueWith: {
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5,
  },
  GoogleIcon: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    alignItems: "center",
  },
  GoogleText: {
    fontSize: 17,
    paddingLeft: 5,
  },
  newAccount: {
    paddingTop: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginHorizontal: 90,
    marginTop: 20,
  },
});
