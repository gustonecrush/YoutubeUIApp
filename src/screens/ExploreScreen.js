import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Categories from "../../assets/data/Categories";
import Videos from "../../assets/data/Videos";
import Category from "../components/Category";
import Header from "../components/Header";
import VideoWrapper from "../components/VideoWrapper";

const ExploreScreen = () => {
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <StatusBar style="dark"></StatusBar>
      {/* Header */}
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} vertical>
        {/* Categories */}
        <View style={styles.categoryWrapper}>
          {Categories.map((category, index) => (
            <Category img={category.image} key={index} />
          ))}
        </View>

        {/* Trending */}
        <View style={styles.trendingWrapper}>
          <Text style={{ marginHorizontal: 25, fontSize: 18 }}>Trending Videos</Text>
         
        {Videos.map((video, index) => (
          <VideoWrapper video={video} key={index} />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 12,
    marginVertical: 15,
  },
  header: {
    fontFamily: "Inter-Regular",
    fontSize: 20,
  },
});
