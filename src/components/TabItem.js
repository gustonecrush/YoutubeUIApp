import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const IconLight = () => {
    if (label === "Home")
      return isFocused ? (
        <Image source={require("../../assets/images/icons/home-active.png")} />
      ) : (
        <Image source={require("../../assets/images/icons/home.png")} />
      );
    if (label === "Explore")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/explore-active.png")}
          style={{ marginLeft: 20 }}
        />
      ) : (
        <Image
          source={require("../../assets/images/icons/explore.png")}
          style={{ marginLeft: 20 }}
        />
      );
    if (label === "Add")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/add.png")}
          style={{ width: 45, height: 45, marginLeft: 15, marginBottom: 10 }}
        />
      ) : (
        <Image
          source={require("../../assets/images/icons/add.png")}
          style={{ width: 45, height: 45, marginLeft: 15, marginBottom: 10 }}
        />
      );
    if (label === "Subscription")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/subscription-active.png")}
        />
      ) : (
        <Image
          source={require("../../assets/images/icons/subscriptions.png")}
        />
      );
    if (label === "Library")
      return isFocused ? (
        <Image
          source={require("../../assets/images/icons/library-active.png")}
        />
      ) : (
        <Image source={require("../../assets/images/icons/library.png")} />
      );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <IconLight />
      {label === "Add" ? null : (
        <Text
          style={[
            styles.text(isFocused),
            label == "Explore" ? { marginLeft: 20 } : { marginLeft: 0 },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 12,
    color: "#000000",
    marginTop: 6,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  }),
});
