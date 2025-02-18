import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logoimage = require("../assets/images/snapLogo.png"); interface Items {
  icon: React.JSX.Element;
  title: any;
  link?: any;
}

const SideBarItems: Items[] = [
  {
    icon: <AntDesign name="home" size={24} color="black" />,
    title: "Home",
    link: "/HomePage",
  },
  {
    icon: <AntDesign name="qrcode" size={24} color="black" />, title: "QR-code",
    link: "/QRCode",
  },
  {
    icon: <AntDesign name="googleplus" size={24} color="black" />,
    title: "Orders",
    link: "/Orders",
  },
  {
    icon: <AntDesign name="wallet" size={24} color="black" />,
    title: "Payment",
  },
  {
    icon: <AntDesign name="contacts" size={24} color="black" />,
    title: "Contact-us",
    link: "https://www.snapmenu.in/#contact-us",
  },
  {
    icon: <AntDesign name="setting" size={24} color="black" />,
    title: "Restaurant settings",
    link: "/RestaurantSettingPage",
  },
];
export default function NavSideBar({ title }: { title: string }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const pathname = usePathname();


  // LogOut user profile and delete data from asyncStorage
  const logOut = async () => {
    await AsyncStorage.removeItem("user");
    router.push("/Login")
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* common navbar for every page */}
      <View style={styles.navbar}>
        {/*  conditionally Render arrow icon  */}
        {pathname === "/HomePage" ? null :
          <AntDesign
            name="arrowleft"
            size={18}
            style={styles.arrowLeft}
            onPress={() => router.back()}
          />
        }
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
          <AntDesign name="bars" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* if user click on heburgermenu then showing this sidebar--- Home,Contact,etc.... */}
      <View style={styles.sideBarMainContainer}>

        {isSidebarVisible &&
          <View style={styles.sidebar}>
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
              <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
                <AntDesign name="logout" size={20} color="red" />
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>

            </View>

          </View>

        }
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white"
  },
  navbar: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    textAlign: "center"
  },
  arrowLeft: {
    marginHorizontal: 20,
    borderRadius: 2,
    borderWidth: 1,
    height: 20
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
  sideBarMainContainer: {
    backgroundColor: "red"
  },
  sidebar: {
    position: "absolute",
    right: 0,
    // backgroundColor: "red",
    paddingBottom: 100,
    elevation: 1,
    zIndex: 1
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
