import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    androidSafeArea: {
        flex:1,
        // backgroundColor:"black",
        paddingTop:Platform.OS==="android"?40:0,
    }
})