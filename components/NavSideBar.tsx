import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const logoimage = require("../assets/images/snapLogo.png"); interface Items {
  icon: React.JSX.Element;
  title: any;
  link?: any;
}

const SideBarItems: Items[] = [
  {
    icon: <Icon name="home" size={20} color={"white"} />,
    title: "Home",
    link: "/HomePage",
  },
  {
    icon: <Icon name="qrcode" size={20} color={"white"} />,
    title: "QR-code",
    link: "/QRCode",
  },
  {
    icon: <Icon name="filetext1" size={20} color={"white"} />,
    title: "Orders",
    link: "/Orders",
  },
  {
    icon: <Icon name="creditcard" size={20} color={"white"} />,
    title: "Payment",
  },
  {
    icon: <Icon name="question" size={20} color={"white"} />,
    title: "Contact-us",
    link: "https://www.snapmenu.in/#contact-us",
  },
  {
    icon: <Icon name="setting" size={20} color={"white"} />,
    title: "Restaurant settings",
    link: "/RestaurantSettingPage",
  },
];
export default function NavSideBar({ title }: { title: string }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.navbar}>
        <Icon
          name="arrowleft"
          size={18}
          style={styles.arrowLeft}
          onPress={() => router.back()}
        />
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {isSidebarVisible &&
        <View style={[styles.sidebar, styles.boxWithShadow]}>
          <View style={styles.logoImageContainer} >
            <Image source={logoimage} style={styles.logoImage} />
          </View>
          <View style={styles.SideBarItemsContainer}>

            {SideBarItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.sidebarItem}
                onPress={() => {
                  if (item.link) {
                    router.push(item.link);
                  }
                  toggleSidebar();
                }}
              >
                <View style={styles.iconContainer}>
                  <View style={styles.icon}>{item.icon}</View>
                  <Text style={styles.sidebarText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.logoutButton}>
              <Icon name="logout" size={20} color="red" />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>

          </View>

        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  navbar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20
  },
  arrowLeft: {
    marginHorizontal: 20,
    borderRadius: 2,
    borderWidth: 1,
    padding: 2
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1
  },
  menuIcon: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9
  },
  logoImageContainer: {
    backgroundColor: "green",
    paddingVertical: 20,
    alignItems: "center"
  },
  logoImage: {
    width: 200,
    height: 90,
    objectFit: "contain",
  },
  sidebar: {
    position: "absolute",
    right: 0,
    backgroundColor: "red",
    paddingBottom: 100,
    elevation: 1,
    zIndex:1
  },
  SideBarItemsContainer: {
    paddingTop: 60,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
  },
  sidebarText: {
    marginLeft: 5,
    fontSize: 16,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 7,
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 7,
    width: "100%",
  },
  icon: {
    backgroundColor: "green",
    borderRadius: 100,
    padding: 6,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
    paddingTop: 100

  },
  logoutText: {
    marginLeft: 10,
    color: "red",
    fontWeight: "bold",
  },
});
