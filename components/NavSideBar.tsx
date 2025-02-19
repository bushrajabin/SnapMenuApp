import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Animated, TouchableWithoutFeedback } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const logoimage = require("../assets/images/snapLogo.png");

interface Items {
  icon: React.JSX.Element;
  title: any;
  link?: any;
}

const SideBarItems: Items[] = [
  {
    icon: <AntDesign name="home" size={20} color="white" />,
    title: "Home",
    link: "/HomePage",
  },
  {
    icon: <AntDesign name="qrcode" size={20} color="white" />,
    title: "QR-code",
    link: "/QRCode",
  },
  {
    icon: <AntDesign name="googleplus" size={20} color="white" />,
    title: "Orders",
    link: "/Orders",
  },
  {
    icon: <AntDesign name="wallet" size={20} color="white" />,
    title: "Payment",
  },
  {
    icon: <AntDesign name="contacts" size={20} color="white" />,
    title: "Contact-us",
    link: "https://www.snapmenu.in/#contact-us",
  },
  {
    icon: <AntDesign name="setting" size={20} color="white" />,
    title: "Restaurant settings",
    link: "/RestaurantSettingPage",
  },
];

export default function NavSideBar({ title }: { title: string }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [sidebarAnim] = useState(new Animated.Value(300)); // Initially hide sidebar off-screen (right side)
  const pathname = usePathname();

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);

    // Trigger sidebar animation when toggled
    Animated.timing(sidebarAnim, {
      toValue: isSidebarVisible ? 300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // LogOut user profile and delete data from asyncStorage
  const logOut = async () => {
    await AsyncStorage.removeItem("user");
    router.push("/Login");
  };

  // Hide sidebar when user navigate to other page
  useEffect(() => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  }, [pathname]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* common navbar for every page */}
      <View style={styles.navbar}>
        {/*  conditionally Render arrow icon  */}
        {pathname === "/HomePage" ? null : (
          <AntDesign
            name="arrowleft"
            size={18}
            style={styles.arrowLeft}
            onPress={() => router.back()}
          />
        )}

        {/* Conditionally render logo and text- */}
        {pathname == "/HomePage" ? (
          <Image source={logoimage} style={styles.logoImage} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIcon}>
          <AntDesign name="bars" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Sidebar content */}
      <TouchableWithoutFeedback onPress={() => isSidebarVisible && toggleSidebar()}>
        <Animated.View
          style={[
            styles.sidebar,
            {
              transform: [
                {
                  translateX: sidebarAnim,
                },
              ],
            },
          ]}
        >
          <View style={styles.logoImageContainer}>
            <Image source={logoimage} style={styles.logoImage} />
          </View>
          <View style={styles.sideBarMainContainer}>
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
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
            <AntDesign name="logout" size={20} color="red" />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    textAlign: "center",
  },
  arrowLeft: {
    marginHorizontal: 20,
    borderRadius: 2,
    borderWidth: 1,
    height: 20,
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: 1,
  },
  menuIcon: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  logoImageContainer: {
    backgroundColor: "#0b9a55",
    paddingVertical: 20,
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 90,
    objectFit: "contain",
  },
  sidebar: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    paddingBottom: 100,
    elevation: 1,
    zIndex: 1,
    width: "60%",
    right: 0,
  },
  sideBarMainContainer: {
    marginTop: 70,
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  sidebarText: {
    marginLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
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
    backgroundColor: "#0b9a55",
    borderRadius: 100,
    padding: 6,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
    paddingTop: 100,
  },
  logoutText: {
    marginLeft: 10,
    color: "red",
    fontWeight: "bold",
  },
});

