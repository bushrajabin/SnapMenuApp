import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";


const logoimage = require("../assets/images/snapLogo.png");

interface links {
  title: string;
  path?: any;
}
const buttons: links[] = [
  { title: "Login", path: "/Login" },
  { title: "Register", path: "/Registration" },
];

export default function Screen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Image source={logoimage} style={styles.image} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur (TAGLINE)
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={[
              styles.button,
              button.title === "Register"
                ? styles.registerButton
                : styles.loginButton,
            ]}
            onPress={() => router.push(button.path)}
          >
            <Text
              style={[
                styles.buttonText,
                button.title === "Register" ? styles.registerButtonText : {},
              ]}
            >
              {button.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red"
  },
  text: {
    // color: Colors.light.text,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 10,
    margin: 10,
    width: 140,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 80
  },
  loginButton: {
    backgroundColor: "green",
  },
  registerButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 16,
  },
  registerButtonText: {
    color: "black",
  },
});



// ---------

// import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <SafeAreaView  style={style.container}>
//       <Text style={style.text}>index</Text>
//     </SafeAreaView>
//   )
// }

// export default index;

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: "yellow",
//     flex:1,
//   },
//   text:{
//     backgroundColor:"red",
//     textAlign:"center",
//     alignItems:"center",
//     justifyContent:"center",
//     margin:'auto'
//   }
// })