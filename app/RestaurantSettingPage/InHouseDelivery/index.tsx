import { View, Text, StyleSheet, Alert, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import NavSideBar from "@/components/NavSideBar";
import Buttons from "@/components/Buttons";
import UserInput from "@/components/UserInput";
import { TouchableOpacity } from "react-native";
import UserLocation from "@/components/UserLocation";
const InHouseDelivery = () => {
  const [houseDeliver, setHouseDeliver] = useState<boolean>(false);
  const [isConfigure, setIsConfigure] = useState<boolean>(false);
  const [deliveryFee, setDeliveryFee] = useState<number>();
  const [orderValue, setOrderValue] = useState<number>();
  const [deliveryRadius, setDeliveryRadius] = useState<number>();
  const [deliveryHour, setDeliveryHour] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [pinCode, setPinCode] = useState<number>();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0)


  return (
    <SafeAreaView style={Styles.mainContainer}>
      <NavSideBar title={"In-House Delivery"} />
      <View style={[Styles.topContainer, Styles.boxWithShadow]}>

        <Text style={Styles.text1}>Configure Delivery Settings</Text>
        <Text style={Styles.text2}>Enable Delivery:</Text>
        <ToggleSwitch
          isOn={isConfigure}
          onColor="green"
          offColor="#ecf0f1"
          size="medium"
          onToggle={(isOn) => {
            setIsConfigure(isOn);
            console.log("changed to:", isOn);
          }}
        />

        {/* if ToggleSwitch is on then shwoing thiss */}
        {isConfigure && (
          <View style={Styles.configureDelivery}>
            <View>
              <Text style={Styles.labelText}>Delivery Fee (₹)</Text>
              <UserInput
                placeholder="0"
                value={deliveryFee}
                onChangeText={(value) => setDeliveryFee(value)}
              />

              <Text style={Styles.labelText}>Minimun order value(₹)</Text>
              <UserInput
                placeholder="0"
                value={orderValue}
                onChangeText={(value) => setOrderValue(value)}
              />

              <Text style={Styles.labelText}>Delivery Radius(km)</Text>
              <UserInput
                placeholder="0"
                value={deliveryRadius}
                onChangeText={(value) => setDeliveryRadius(value)}
              />

              <Text style={Styles.labelText}>Delivery Hours:</Text>
              <UserInput
                placeholder="0"
                value={deliveryHour}
                onChangeText={(value) => setDeliveryHour(value)}
              />
            </View>

            {/* Location settings */}
            <View>
              <UserLocation />

              <Text style={Styles.labelText}>Street Address:</Text>
              <UserInput
                placeholder="0"
                value={streetAddress}
                onChangeText={(value) => setStreetAddress(value)}
              />

              <Text style={Styles.labelText}>City:</Text>
              <UserInput
                placeholder="0"
                value={city}
                onChangeText={(value) => setCity(value)}
              />

              <Text style={Styles.labelText}>State:</Text>
              <UserInput
                placeholder="0"
                value={state}
                onChangeText={(value) => setState(value)}
              />

              <Text style={Styles.labelText}>Country:</Text>
              <UserInput
                placeholder="0"
                value={country}
                onChangeText={(value) => setCountry(value)}
              />

              <Text style={Styles.labelText}>pinCode:</Text>
              <UserInput
                placeholder="0"
                value={pinCode}
                onChangeText={(value) => setPinCode(value)}
              />
            </View>


            {/* Restaurant cordinates (latitude  longitude) */}
            <View>
              <Text style={Styles.labelText}>Restaurant Cordinates:</Text>
              <View>
                <Text style={Styles.labelText}>Latitude:</Text>
                <UserInput
                  placeholder="0"
                  value={latitude}
                  onChangeText={(value) => setLatitude(value)}
                />
              </View>
              <View>
                <Text style={Styles.labelText}>Longitude:</Text>
                <UserInput
                  placeholder="0"
                  value={longitude}
                  onChangeText={(value) => setLongitude(value)}
                />
              </View>
            </View>
          </View>
        )}

        <Buttons
          title={"Save Settings"}
          onPress={() => Alert.alert("Save successfully!!!!")}
        />
      </View>
    </SafeAreaView>
  );
};

export default InHouseDelivery;

// styles
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
  },
  text1: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,
    paddingTop: 20,
  },
  text2: {
    fontSize: 17,
    color: "grey",
    paddingVertical: 5,
    fontWeight: 600,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 10,
  },
  TextFields: {
    backgroundColor: "red",
  },
  labelText: {
    fontSize: 18,
    color: "grey",
  },

  // Showing conifgure delivery settings
  configureDelivery: {
    backgroundColor: "red",
    overflow:"scroll"

  },
});
