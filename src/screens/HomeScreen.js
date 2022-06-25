import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/VideoWrapper";
import Videos from "../../assets/data/Videos";
import VideoWrapper from "../components/VideoWrapper";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <Header />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrapperMenu}
      >
        <Menu />
      </ScrollView>
      <ScrollView vertical showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
        {Videos.map((video, index) => (
          <VideoWrapper video={video} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapperMenu: {
    marginRight: 25,
  },
  container: {
    flex: 1,
  },
});
