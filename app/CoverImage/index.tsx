import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, TextInput, View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { router } from "expo-router";
// import BlackBgButtons from "@/components/BlackBgButtons";

export default function index() {
  // Store the selected image URL
  const [image, setImage] = useState("");
  // visiblity of upload section
  const [showUploadSection, setShowUploadSection] = useState(true);
  // Preview selected image
  const [previewImage, setPreviewImage] = useState(false);

  // Function to pick an image from the device
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowUploadSection(false);
      console.log(result);
    } else {
      alert("you did not choose any image");
    }
  };

  // showThe upload section when click on addItem button
  const addItem = () => {
    setShowUploadSection(true);
  };

  // PreviewSelected image
  const imagePreview = () => {
    if (image) {
      setPreviewImage(true);
    } else {
      Alert.alert("no image preview!!!!!");
    }
  };
  return (
    <SafeAreaView style={Styles.mainContainer}>
      {/* ----Menu Title (userinput)---- */}
      <View>
        <TextInput placeholder="Menu Title" style={Styles.menuInput} />
      </View>
      {/* Image upload  */}
      <View>
        {showUploadSection ? (
          <View style={Styles.uploadImageSection}>
            <Icon name="photo" size={40} />
            <Text style={Styles.text1}>No Image Uploaded yet at that Time</Text>
            <Text style={Styles.text2}>Support format JPG,PNG</Text>
            <TouchableOpacity>
              <Text onPress={pickImage} style={Styles.uploadButton}>
                Upload Image
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          image && (
            <View style={Styles.imageView}>
              <Image source={{ uri: image }} style={Styles.image} />
            </View>
          )
        )}
      </View>

      {/* Add item button */}
      <TouchableOpacity>
        <Text style={Styles.addItemButton} onPress={addItem}>
          Add Item
        </Text>
      </TouchableOpacity>

      {/* Preview & Save Buttons---- */}
      <View style={Styles.Buttons}>
        <TouchableOpacity>
          <Text style={Styles.previewButton} onPress={imagePreview}>
            Preview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>router.navigate("/OfferDishes")}>
          <Text style={Styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Preview Section */}
      {previewImage && (
        <View style={Styles.previewSection}>
          <View style={Styles.previewImagePart}>
            <View style={Styles.previewTopPart}>
              <Text style={Styles.previewText}>Image Preview</Text>
              <TouchableOpacity onPress={() => setPreviewImage(false)}>
                <Icon name="close" size={20} style={Styles.closeButton} />
              </TouchableOpacity>
            </View>

            <Image source={{ uri: image }} style={Styles.previewImage} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

// Styles---

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height:"100%",
    flex:1
  },
  menuInput: {
    padding: 15,
    marginHorizontal: 30,
    marginVertical: 23,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "grey",
  },
  uploadImageSection: {
    marginVertical: 25,
    backgroundColor: "lightcolor",
    alignItems: "center",
    width: 300,
    margin: "auto",
    padding: 30,
    borderStyle: "dashed",
    borderColor: "grey",
    borderWidth: 1,
    paddingVertical: 30,
  },
  text1: {
    fontSize: 16,
    paddingBottom: 18,
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
  },
  text2: {
    fontSize: 13,
    fontWeight: "light",
    color: "grey",
    paddingBottom: 20,
  },

  uploadButton: {
    backgroundColor: "black",
    color: "white",
    padding: 14,
    fontSize: 13,
    borderRadius: 40,
    width: 120,
    textAlign: "center",
    margin: "auto",
  },
  imageView: {
    width: 320,
    margin: "auto",
    borderColor: "grey",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 300,
    margin: "auto",
    padding: 10,
    borderRadius: 6,
  },

  addItemButton: {
    margin: "auto",
    marginVertical: 20,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal:10,
    paddingVertical:17,
    fontSize: 13,
    borderRadius: 40,
    textAlign: "center",
    marginHorizontal:"30%",
  },
  Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    paddingVertical:60
    // paddingBottom: 90,
  },
  previewButton: {
    padding: 15,
    textAlign: "center",
    fontSize: 16,
    borderRadius: 40,
    width: 160,
    borderColor: "grey",
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: "black",
    color: "white",
    padding: 15,
    fontSize: 16,
    borderRadius: 40,
    width: 160,
    textAlign: "center",
  },

  // PreviewSection
  previewSection: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  previewImagePart: {
    backgroundColor: "white",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  previewTopPart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: 10,
    padding: 10,
  },
  previewText: {
    color: "black",
    backgroundColor: "whitesmoke",
    textDecorationLine: "underline",
    padding: 10,
  },
  previewImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    margin: "auto",
  },
  closeButton: {
    color: "black",
    textAlign: "center",
  },
});
