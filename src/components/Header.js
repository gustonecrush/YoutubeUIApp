import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/yt-logo.png")}
          style={{ width: 120, height: 20 }}
        />
      </TouchableOpacity>

      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <Feather name="cast" color="#000" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications-none" color="#000" size={27} />
          <View style={styles.badgeNotif}>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                color: "#FFF",
                fontSize: 10,
              }}
            >
              1
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" color="#000" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Image
            source={require("../../assets/images/user.png")}
            style={{ width: 35, height: 35, borderRadius: 100 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 15,
  },
  iconWrapper: {
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, .15)",
    justifyContent: "space-between",
    width: "55%",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  badgeNotif: {
    width: 15,
    height: 15,
    backgroundColor: "#FF0000",
    position: "absolute",
    right: -2,
    top: 2,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF",
    borderWidth: 1,
  },
});
