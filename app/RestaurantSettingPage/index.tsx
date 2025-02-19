import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import ToggleSwitch from "toggle-switch-react-native";
import AntDesign from '@expo/vector-icons/AntDesign';import NavSideBar from "@/components/NavSideBar";

interface RestaurentSetting {
  title: string;
  Icon: React.JSX.Element;
  path?: any;
}

const RestaurentSetting: RestaurentSetting[] = [
  {
    title: "Table Settings",
    Icon: <AntDesign name="right" size={24} color="black" />,
    path: "/RestaurantSettingPage/TableSetting",
  },
  {
    title: "Manager Members",
    Icon: <AntDesign name="right" size={24} color="black" />,
    path: "/RestaurantSettingPage/ManageMember",
  },
  {
    title: "In-House Delivery",
    Icon: <AntDesign name="right" size={24} color="black" />,
    path: "/RestaurantSettingPage/InHouseDelivery",
  },
];

export default function RestaurantSettingPage() {
  const [isPayToOrderOn, setIsPayToOrderOn] = useState(false); // Managing toggle button

  return (
    <SafeAreaView style= {Styles.mainContainer}>
      <NavSideBar title={"Restaurant Setting"} />
        {/* <NavBar title={"Restaurant Settings"} /> */}
        <View style={Styles.itemContainer}>
          {RestaurentSetting.map((item, index) => {
            const { title, Icon, path } = item;
            return (
              <TouchableOpacity
                key={index}
                style={[Styles.itemDiv, Styles.shadow]}
                onPress={() => router.navigate(path)}
              >
                <Text style={Styles.text}>{title}</Text>
                {Icon}
              </TouchableOpacity>
            );
          })}

          <View style={[Styles.itemDiv, Styles.shadow]}>
            <Text style={Styles.text}>Pay to order</Text>
            <ToggleSwitch
              isOn={isPayToOrderOn}
              onColor="green"
              offColor="#ecf0f1"
              size="small"
              onToggle={(isOn) => {
                setIsPayToOrderOn(isOn);
                console.log("changed to:", isOn);
              }}
            />
          </View>
        </View>
   </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex:1
  },
  itemContainer: {
    marginTop: 50,
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  shadow: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
