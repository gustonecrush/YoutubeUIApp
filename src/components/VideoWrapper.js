import React, { useRef, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Video, AVPlaybackStatus } from "expo-av";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoWrapper = ({ video }) => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} /> */}

      <YoutubePlayer
        height={200}
        play={playing}
        style={styles.thumbnail}
        videoId={video.video}
      />

      <View style={styles.infoWrapper}>
        <Image
          source={{ uri: video.channel.image }}
          style={styles.imgChannel}
        />
        <View style={styles.info}>
          <View>
            <Text style={styles.titleText}>
              {/* {video.title.length > 10
              ? video.title.slice(0, 25) + "\n" + video.title.slice(25)
              : video.title} */}
              {video.title}
            </Text>
            <Text style={styles.descText}>
              {video.channel.name.length > 7
                ? video.channel.name.slice(0, 6) + ".."
                : video.channel.name}{" "}
              • {video.views} views • {video.uploaded}
            </Text>
          </View>
          <Entypo name="dots-three-vertical" size={20} color="#000" />
        </View>
      </View>
    </View>
  );
};

export default VideoWrapper;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  imgChannel: { width: 30, height: 30, borderRadius: 30 },
  thumbnail: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    marginRight: 15,
  },
  info: {
    marginLeft: 10,
    flexDirection: "row",
    paddingRight: 10,
  },
  titleText: {
    flexWrap: "wrap",
    width: 280
  },
  descText: {
    color: "#606060",
    fontSize: 12,
    marginTop: 5,
  },
  video: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
