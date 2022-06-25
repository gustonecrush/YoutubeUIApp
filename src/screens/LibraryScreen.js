import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import LibraryMenu from "../components/LibraryMenu";
import { Feather } from "@expo/vector-icons";

const LibraryScreen = () => {
  return (
    <View>
      <StatusBar style="dark"></StatusBar>
      <Header />

      {/* Recent */}
      <View style={styles.recentWrapper}>
        <Text style={styles.textHeader}>Recent</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        ></ScrollView>
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>

      {/* Menu */}
      <View style={styles.menuWrapper}>
        <LibraryMenu />
      </View>

      {/* Playlist */}
      <View style={styles.playlistWrapper}>
        <Text style={styles.textHeader}>Playlists</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: "rgba(196,196,196,.15)",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Feather name="plus" size={25} color="#076AFE" />
          <Text style={{ color: "#076AFE", marginLeft: 15, fontSize: 15 }}>
            New Playlist
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  menuWrapper: {
    marginLeft: 10,
  },
  playlistWrapper: {
    marginHorizontal: 20,
    marginTop: 25,
  },
  textHeader: {
    fontSize: 17,
  },
  recentWrapper: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  divider: {
    backgroundColor: '#000',
    height: 0.7,
    opacity: 0.1
  }
});
