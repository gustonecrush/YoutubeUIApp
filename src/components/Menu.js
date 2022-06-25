import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const menus = [
  {
    id: 1,
    name: "Shorts",
    logo: require("../../assets/images/short-logo.png"),
  },
  {
    id: 2,
    name: "All",
  },
  {
    id: 3,
    name: "Programming",
  },
  {
    id: 4,
    name: "Mobile Legend",
  },
  {
    id: 5,
    name: "UI/UX Design",
  },
  {
    id: 6,
    name: "Basketball",
  },
  {
    id: 7,
    name: "Traveling",
  },
];

const menuSubs = [
  {
    id: 2,
    name: "All",
  },
  {
    id: 3,
    name: "Programming",
  },
  {
    id: 4,
    name: "Mobile Legend",
  },
  {
    id: 5,
    name: "UI/UX Design",
  },
  {
    id: 6,
    name: "Basketball",
  },
  {
    id: 7,
    name: "Traveling",
  },
];

const Menu = ({ screen }) => {
  const [active, setActive] = useState("All");

  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {screen == "Subscription"
        ? menuSubs.map((menu, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menu,
                menu.name == "Shorts"
                  ? styles.menuBg("Shorts")
                  : styles.menuBg(),
                active == menu.name ? styles.menu(menu.name) : styles.menu(),
              ]}
              onPress={() => setActive(menu.name)}
            >
              {menu.name === "Shorts" ? (
                <Image
                  source={require("../../assets/images/short-logo.png")}
                  style={{ width: 30, height: 30 }}
                />
              ) : null}
              <Text
                style={[
                  active == menu.name ? styles.text(menu.name) : styles.text(),
                ]}
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))
        : menus.map((menu, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menu,
                menu.name == "Shorts"
                  ? styles.menuBg("Shorts")
                  : styles.menuBg(),
                active == menu.name ? styles.menu(menu.name) : styles.menu(),
              ]}
              onPress={() => setActive(menu.name)}
            >
              {menu.name === "Shorts" ? (
                <Image
                  source={require("../../assets/images/short-logo.png")}
                  style={{ width: 30, height: 30 }}
                />
              ) : null}
              <Text
                style={[
                  active == menu.name ? styles.text(menu.name) : styles.text(),
                ]}
              >
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginVertical: 15,
    height: 42,
  },
  menu: (active) => ({
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: active ? "#000" : "rgba(196,196,196,.15)",
  }),
  text: (active) => ({
    fontSize: 15,
    color: active ? "white" : "#000",
    fontFamily: "Inter-Regular",
  }),
  menuBg: (short) => ({
    backgroundColor: "rgba(196,196,196,.15)",
    borderColor: short ? "#DADADA" : "transparent",
    borderWidth: 1.5,
  }),
});
