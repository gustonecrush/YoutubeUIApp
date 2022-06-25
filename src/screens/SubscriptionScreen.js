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
import Menu from "../components/Menu";
import { useFonts } from "expo-font";
import Channels from "../../assets/data/Channels";
import Subscriptions from "../components/Subscriptions";
import Videos from "../../assets/data/Videos";
import VideoWrapper from "../components/VideoWrapper";

const SubscriptionScreen = () => {
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <StatusBar style="light"></StatusBar>

      {/* Header */}
      <Header />

      {/* Channels */}
      <View style={styles.channelsWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Channels.map((channel, index) => (
            <Subscriptions channel={channel} key={index} />
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.btnAll}>
          <Text style={styles.textAll}>ALL</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrapperMenu}
      >
        <Menu screen="Subscription" />
      </ScrollView>

      {/* Videos */}
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {Videos.map((video, index) => (
          <VideoWrapper video={video} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  channelsWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
    marginBottom: 2,
    marginHorizontal: 25,
  },
  btnAll: {
    backgroundColor: "rgba(196,196,196,.15)",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 100,
    marginRight: -5,
  },
  textAll: {
    color: "#076AFE",
    fontFamily: "Inter-Regular",
  },
  wrapperMenu: {
    marginRight: 25,
    height: 90
  },
});
