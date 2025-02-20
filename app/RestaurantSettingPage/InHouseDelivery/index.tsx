import { View, Text, StyleSheet, Alert, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";
import NavSideBar from "@/components/NavSideBar";
import Buttons from "@/components/Buttons";
import UserInput from "@/components/UserInput";
import UserLocation from "@/components/UserLocation";
import DeliveryHoursPicker from "@/components/DeliveryHoursPicker";
import { ScrollView } from "react-native";

// TypeScript types for state
interface LocationData {
  street: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  latitude: number;
  longitude: number;
}

const InHouseDelivery = () => {
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



  // ---update location data
  const handleLocationFetched = (locationData: LocationData) => {
    setLatitude(locationData.latitude);
    setLongitude(locationData.longitude);
    setStreetAddress(locationData.street || "");
    setCity(locationData.city || "");
    setState(locationData.state || "");
    setCountry(locationData.country || "");
  };
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <NavSideBar title={"In-House Delivery"} />
      <ScrollView style={[Styles.topContainer, Styles.boxWithShadow]}>

        <Text style={Styles.text1}>Configure Delivery Settings</Text>
        <Text style={Styles.text2}>Enable Delivery:</Text>
        <ToggleSwitch
          isOn={isConfigure}
          onColor="green"
          offColor="#ecf0f1"
          size="small"
          onToggle={(isOn) => {
            setIsConfigure(isOn);
          }}
        />

        {/* if ToggleSwitch is on then shwoing thiss */}
        {isConfigure && (
          <View style={Styles.deliveryFields} >
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
              {/* Delivery hours time */}
              <DeliveryHoursPicker />
            </View>

            {/* Location settings */}
            <View>
              <Text style={Styles.locationSettingsText}>Location Settings</Text>
              <UserLocation onLocationFetched={handleLocationFetched} />
              <Text style={Styles.labelText}>Street Address:</Text>
              <UserInput
                placeholder=""
                value={streetAddress}
                onChangeText={(value) => setStreetAddress(value)}
              />

              <Text style={Styles.labelText}>City:</Text>
              <UserInput
                placeholder=""
                value={city}
                onChangeText={(value) => setCity(value)}
              />

              <Text style={Styles.labelText}>State:</Text>
              <UserInput
                placeholder=""
                value={state}
                onChangeText={(value) => setState(value)}
              />

              <Text style={Styles.labelText}>Country:</Text>
              <UserInput
                placeholder=""
                value={country}
                onChangeText={(value) => setCountry(value)}
              />

              <Text style={Styles.labelText}>PinCode:</Text>
              <UserInput
                placeholder=""
                value={pinCode}
                onChangeText={(value) => setPinCode(value)}
              />

              {/* Restaurant cordinates (latitude  longitude) */}
              <View style={Styles.restaurentCordinates}>
                <Text style={Styles.labelText}>Restaurant Cordinates:</Text>
                <View style={Styles.latitudeLongitudeContainer}>
                  <View style={Styles.latitudelongitude}>
                    <Text style={Styles.labelText}>Latitude:</Text>
                    <UserInput
                      placeholder="0"
                      value={latitude.toString()}
                      onChangeText={(value) => setLatitude(Number(value))}
                    />
                  </View>
                  <View style={Styles.latitudelongitude}>
                    <Text style={Styles.labelText}>Longitude:</Text>
                    <UserInput
                      placeholder="0"
                      value={longitude.toString()}
                      onChangeText={(value) => setLongitude(Number(value))}
                    />
                  </View>
                </View>
              </View>
            </View>


          </View>


        )}
        <View style={Styles.Button}>
          <Buttons
            title={"Save Settings"}
            onPress={() => Alert.alert("Save successfully!!!!")}
          />
        </View>

      </ScrollView>
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
    marginTop: 20,
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
    fontWeight: 400,
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
    fontSize: 14,
    color: "grey",
    paddingHorizontal: 14,
    fontWeight: 500
  },

  Button: {
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 20,
    marginHorizontal: 90,
    alignItems: "center",
    paddingBottom: 10
  },
  // IsConfigure styling
  deliveryFields: {
    paddingTop: 30
  },

  // Location settings styling
  locationSettingsText: {
    paddingHorizontal: 10,
    fontWeight: 600,
    fontSize: 16,
    color: "grey"
  },
  // latitude& longitude styling
  restaurentCordinates: {
    backgroundColor: "#f9fafb",
    borderRadius: 7,
    margin: 2,
    padding: 4
  },
  latitudeLongitudeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  latitudelongitude: {
    width: "50%"
  },
});
