import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
const logoImage = require("../../assets/images/snapmenuDark.png");
import { useRouter } from "expo-router";
import Buttons from "@/components/Buttons";
import UserInput from "@/components/UserInput";
import AntDesign from '@expo/vector-icons/AntDesign';
import GoogleAuth from "@/components/GoogleAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        // If user is logged in, navigate to home otherwise login page
        router.push("/HomePage");
      }
    };
    checkLogin();
  }, [router]);

  // handle login and save user info in asyncStorage 
  const handleLogin = () => {
    if (email && password) {
      AsyncStorage.setItem("user", email);
      Alert.alert("Success", `Welcome back, ${email}!`);
      if (email === email) {
        router.push("/HomePage");
      }
      router.push("/RegisterRestaurant");
    } else {
      Alert.alert("Error", "Please fill in both fields.");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Login Header */}
      <View style={styles.topContainer}>
        <Image source={logoImage} style={styles.logoImage} />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Login</Text>
        <UserInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <UserInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>

        {/* Sign-In Button */}
        <View style={styles.button}>
          <Buttons title={"Login"} onPress={handleLogin} />
        </View>

        {/* Social Login Options */}
        <View style={styles.continueWithContainer}>
          <Text style={styles.continueWith}>------Or continue with------</Text>
          <TouchableOpacity style={styles.GoogleIcon}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.googleText}><GoogleAuth /></Text>
          </TouchableOpacity>

          {/* Create New Account Option */}
          <TouchableOpacity onPress={() => router.push("/Registration")}>
            <Text style={styles.newAccount}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  topContainer: {
    paddingHorizontal: 50,
    paddingVertical: 30,
    backgroundColor: "black"
  },
  logoImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 90,
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: 110,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: 10,
    paddingRight: 10,
  },
  continueWithContainer: {
    alignItems: "center",
    paddingTop: 30,
    gap: 10,
  },
  continueWith: {
    fontSize: 15,
    textAlign: "center",
  },
  GoogleIcon: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 9,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  googleText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  newAccount: {
    textAlign: "center",
    paddingTop: 6,
  },
  button: {
    marginHorizontal: 90,
    marginTop: 10,
  },
});
