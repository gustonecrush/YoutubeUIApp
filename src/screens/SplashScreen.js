import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Main');
    }, 4000)
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden></StatusBar>
      <Image
        source={require("../../assets/images/youtube-logo.png")}
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 90,
    resizeMode: "contain",
  },
});
