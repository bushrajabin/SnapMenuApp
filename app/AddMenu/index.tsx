import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
const logoimage = require("../../assets/images/snapLogo.png");
import Buttons from "@/components/Buttons";
const MenuIcon = require("../../assets/images/hamburger.png");
const MenuImage = require("../../assets/images/MenuImage.png");
import * as ImagePicker from "expo-image-picker";
import UserInput from "@/components/UserInput";

// Define the type for a menu item
interface MenuItem {
  menuName: string;
  category: string;
  image: string;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
}

export default function AddMenu(props: MenuItem) {
  const [menuName, setMenuName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<any>(null);
  const [itemDescription, setItemDescription] = useState<string>("");
  const [selectedDishType, setSelectedDishType] = useState<string>("veg");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isMenuSaved, setIsMenuSaved] = useState(false); // To show input fields conditionally
  const [editingIndex, setEditingIndex] = useState<number | null>(null); //for edited the selected item

  // Upload Image
  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not choose any image");
    }
  };

  // Handle Done Menu
  const DoneMenu = () => {
    if (
      !menuName ||
      !category ||
      !image ||
      !itemName ||
      !itemPrice ||
      !itemDescription
    ) {
      Alert.alert("All fields are required!");
      return;
    }

    const newItem: MenuItem = {
      menuName,
      category,
      image,
      itemName,
      itemPrice,
      itemDescription,
    };

    if (editingIndex !== null) {
      // Update the existing item if we're editing
      const updatedMenu = [...menuItems];
      updatedMenu[editingIndex] = newItem;
      setMenuItems(updatedMenu);
      setEditingIndex(null); // Reset editing state
    } else {
      // Add new item to the menu
      setMenuItems([...menuItems, newItem]);
    }

    // Reset input fields after saving
    setMenuName("");
    setCategory("");
    setImage("");
    setItemName("");
    setItemPrice(null);
    setItemDescription("");
    setIsMenuSaved(true);
  };

  // Handle Add New Section
  const handleAddNewSection = () => {
    setIsMenuSaved(false); // Show input fields again
  };
  // Handle Edit Menu Item
  const editMenu = (index: number) => {
    const itemToEdit = menuItems[index];
    setMenuName(itemToEdit.menuName);
    setCategory(itemToEdit.category);
    setImage(itemToEdit.image);
    setItemName(itemToEdit.itemName);
    setItemPrice(itemToEdit.itemPrice);
    setItemDescription(itemToEdit.itemDescription);
    setEditingIndex(index); // Set the edited items
    setIsMenuSaved(false); // Show the all input fields
  };

  // Save Menu

  const saveMenu = () => {
    console.log("menuSaved");
    router.navigate("/HomePage");
  };
  return (
    <SafeAreaView style={Styles.MenuMainContainer}>
      {/* Top Section */}
      <View style={Styles.TopContainer}>
        <Image source={logoimage} style={Styles.logoImage} />
        <View style={Styles.manuIconDiv}>
          <Image source={MenuIcon} style={Styles.menuIconImage} />
        </View>
      </View>
      {/* Menu Name */}
      <View>
        <UserInput
          placeholder="Menu Name"
          value={menuName}
          onChangeText={(text) => setMenuName(text)}
        />
      </View>
      {/* Category */}
      <View style={Styles.categoryField}>
        <UserInput
          placeholder="Category field"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        {/* <Icon name="delete" size={20} /> */}
      </View>

      {isMenuSaved ? (
        <View>
          <ScrollView
            style={Styles.menuItemsContainer}
            showsVerticalScrollIndicator={false}
          >
            {menuItems.map((item, index) => (
              <View key={index}>
                <View style={Styles.menuItems}>
                  <Image source={MenuImage} style={Styles.MenuImage} />
                  <View>
                    <Text>
                      {item.itemName} - (₹{item.itemPrice})
                    </Text>
                    <Text> {item.itemDescription}</Text>
                  </View>

                  <TouchableOpacity>
                    <Buttons title={"Edit"} onPress={() => editMenu(index)} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={Styles.isMenuButtons}>
            <Buttons title="Add Section" onPress={handleAddNewSection} />
            <Buttons title="Save Menu" onPress={saveMenu} />
          </View>
        </View>
      ) : (
        <View>
          {/* Add Menu Input Fields */}
          <View>
            <UserInput
              placeholder="Item Name"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />
            <UserInput
              placeholder="Item Price"
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
            />
            <UserInput
              placeholder="Item Description"
              value={itemDescription}
              onChangeText={(text) => setItemDescription(text)}
            />

            {/* Dish Type Radio Buttons */}
            <View style={Styles.radioContainer}>
              <Text style={Styles.radioHeader}>Select Dish Type:</Text>
              {["Veg", "Non-Veg", "Egg"].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={Styles.radioButtonContainer}
                  onPress={() => setSelectedDishType(option)}
                >
                  <View style={Styles.radioButton}>
                    {selectedDishType === option && (
                      <View style={Styles.radioButtonSelected} />
                    )}
                  </View>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Upload Cover Image */}
            <View style={Styles.uploadFileField}>
              {image ? (
                <Image source={{ uri: image }} style={Styles.displayImage} />
              ) : (
                <>
                  <Text style={Styles.uploadText}>Upload Cover Image</Text>
                  <TouchableOpacity onPress={uploadImage}>
                    <View style={Styles.uploadIcon}>
                      {/* <Icon name="upload" size={10} color={"white"} /> */}
                      <Text style={Styles.uploadFileText}>Upload File</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>

          {/* Buttons for add menu section */}
          <View style={Styles.Buttons}>
            <Buttons title={"Done"} onPress={DoneMenu} />
            <Buttons
              title={"Add Item"}
              onPress={() => router.navigate("/AddMenu")}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  MenuMainContainer: {
    flex: 1,
  },
  TopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoImage: {
    width: "40%",
    height: 80,
    objectFit: "contain",
    marginHorizontal: 30
  },
  manuIconDiv: {
    width: 70,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    padding: 2,
  },
  menuIconImage: {
    width: 40,
    height: 40,
    color: "white",
  },
  categoryField: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 20,
    alignItems: "center",
  },

  radioContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  radioHeader: {
    fontSize: 16,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  uploadFileField: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  uploadText: {
    fontSize: 13,
    paddingHorizontal: 20,
  },
  uploadIcon: {
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    gap: 6,
  },
  uploadFileText: {
    color: "white",
    fontSize: 10,
  },
  Buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  displayImage: {
    width: 100,
    height: 70,
    alignSelf: "center",
    borderRadius: 6,
  },
  // isMenu Styles----
  isMenu: {
    backgroundColor: "yellow",
  },
  menuItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 4,
  },
  MenuImage: {
    width: 46,
    height: 40,
  },
  isMenuButtons: {
    marginHorizontal: 80,
    gap: 10,
  },
  menuItemsContainer: {
    maxHeight: 250,
  },
});
