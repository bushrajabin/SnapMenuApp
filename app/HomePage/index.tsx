import { router } from "expo-router";
import { SafeAreaView, Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Buttons from "@/components/Buttons";
import NavSideBar from "@/components/NavSideBar";
const logoimage = require("../../assets/images/snapLogo.png");
export default function HomePage() {
  return (
    <SafeAreaView style={Styles.container}>
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
    backgroundColor: "white",
    flex: 1,
    zIndex:-1,
    elevation:0
  },
  TopContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImage: {
    width: "60%",
    height:"100%",
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
    alignItems: "center",
    margin: "auto",
    elevation:1,
    zIndex:1
  },
});
