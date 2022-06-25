import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

const menus = [
  {
    id: 1,
    name: "History",
  },
  {
    id: 2,
    name: "Your Videos",
    desc: "20 recommendations",
  },
  {
    id: 3,
    name: "Downloads",
  },
  {
    id: 4,
    name: "Your Movies",
  },
  {
    id: 5,
    name: "Watch Later",
    desc: "You save for later",
  },
  {
    id: 6,
    name: "Liked Videos",
    desc: "No videos",
  },
];

const Icon = ({ label }) => {
  if (label == "History") {
    return <MaterialCommunityIcons name="history" size={25} color="#000" />;
  }
  if (label == "Your Videos") {
    return (
      <MaterialCommunityIcons name="play-box-outline" size={25} color="#000" />
    );
  }
  if (label == "Downloads") {
    return <Octicons name="download" size={25} color="#000" />;
  }
  if (label == "Your Movies") {
    return <MaterialCommunityIcons name="filmstrip" size={25} color="#000" />;
  }
  if (label == "Watch Later") {
    return (
      <MaterialCommunityIcons name="clock-outline" size={25} color="#000" />
    );
  }
  if (label == "Liked Videos") {
    return <AntDesign name="like2" size={25} color="#000" />;
  }
};

const Menu = ({ menu }) => (
  <TouchableOpacity style={styles.menu}>
    <Icon label={menu.name} />
    <View style={{ marginLeft: 10 }}>
      <Text
        style={[
          { fontSize: 16 },
          menu.name == "Downloads" ? { marginLeft: 10 } : { marginLeft: 0 },
        ]}
      >
        {menu.name}
      </Text>
      {menu.desc ? (
        <Text style={{ fontSize: 11, color: "#979797", marginTop: 2, flexWrap: 'wrap' }}>{menu.desc}</Text>
      ) : null}
    </View>
  </TouchableOpacity>
);

const LibraryMenu = () => {
  return (
    <View style={styles.container}>
      {menus.map((menu, index) => (
        <Menu key={index} menu={menu} />
      ))}
    </View>
  );
};

export default LibraryMenu;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "rgba(196,196,196,.15)",
    borderRadius: 10,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    width: "45%",
    marginLeft: 10,
    marginVertical: 5,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
});
