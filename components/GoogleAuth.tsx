import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";
const GoogleAuth = () => {
  const [user, setUser] = useState<null>(null);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <Text>hiiii</Text>
      ) : (
        <Pressable style={{ backgroundColor: "#4285F4", padding: 10 }}>
          <Text style={{ color: "white" }}>Sign in with Google</Text>
        </Pressable>
      )}
    </View>
  );
};

export default GoogleAuth;
