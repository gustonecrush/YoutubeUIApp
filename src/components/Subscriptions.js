import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Subscriptions = ({ channel }) => {
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={{ uri: channel.image }} />
      </View>

      <Text style={styles.text}>
        {channel.name.length > 8
          ? channel.name.slice(0, 8) + "..."
          : channel.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  imgWrapper: {
    borderRadius: 200,
    width: 63,
    height: 63,
    borderWidth: 1,
    borderColor: "rgba(196,196,196,.15)",
  },
  img: {
    borderRadius: 200,
    width: 63,
    height: 63,
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    marginTop: 5
  },
});
