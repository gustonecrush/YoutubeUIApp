import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const menus = [
  { id: 1, name: "Your Channel", icon: "account-box-outline", type: "MCI" },
  { id: 2, name: "Youtube Studio", icon: "youtube-studio", type: "MCI" },
  { id: 3, name: "Time Watched", icon: "bar-chart-2" },
  { id: 4, name: "Get Youtube Premium", icon: "youtube" },
  { id: 5, name: "Purchases and Memberships", icon: "dollar-sign" },
  { id: 6, name: "Switch Account", icon: "switch-account", type: "MI" },
  { id: 7, name: "Turn on Incognito", icon: "incognito", type: "MCI" },
  {
    id: 8,
    name: "Your data in Youtube",
    icon: "shield-account-variant",
    type: "MCI",
  },
  { id: 9, name: "Settings", icon: "settings" },
  { id: 10, name: "Help and Feedback", icon: "help-circle" },
];

const Icon = ({ menu }) => {
  if (menu.type == "MCI")
    return <MaterialCommunityIcons name={menu.icon} size={24} color="#000" />;
  if (menu.type == "MI")
    return <MaterialIcons name={menu.icon} size={24} color="#000" />;
  return <Feather name={menu.icon} size={24} color="#000" />;
};

const Menu = ({ menu }) => (
  <TouchableOpacity style={styles.menuWrapper}>
    <Icon menu={menu} />
    <Text style={styles.menuText}>{menu.name}</Text>
  </TouchableOpacity>
);

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={25} color="#000" />
        </TouchableOpacity>

        <Text
          style={{
            color: "#076AFE",
            fontSize: 18,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          ACCOUNT
        </Text>
        <Text></Text>
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            borderRadius: 40,
          }}
          source={require("../../assets/images/user.png")}
        />
        <View style={styles.infoWrapper}>
          <View style={styles.infoName}>
            <Text>Farhan Augustiansyah</Text>
            <Feather name="chevron-down" size={20} color="#000" />
          </View>
          <Text>farhanguss@gmail.com</Text>
          <TouchableOpacity>
            <Text style={styles.manageTxt}>Manage your Google Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu */}
      <ScrollView showsVerticalScrollIndicator={false} vertical>
        <View style={styles.menu}>
          {menus.map((menu, index) => (
            <Menu menu={menu} key={index} />
          ))}
        </View>

        {/* Privacy and Policy */}
        <Text style={{ textAlign: "center", marginTop: 30 }}>
          Privacy Policy • Terms of Services
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  menuWrapper: {
    backgroundColor: "rgba(196,196,196,.15)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    marginLeft: 15,
  },
  menu: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  profile: {
    flexDirection: "row",
    marginHorizontal: 25,
    backgroundColor: "rgba(196,196,196,.15)",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  infoName: {
    flexDirection: "row",
    alignItems: "center",
  },
  manageTxt: {
    fontSize: 15,
    color: "#076AFE",
    marginTop: 5,
  },
  infoWrapper: {
    marginLeft: 18,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 25,
    backgroundColor: "rgba(196,196,196,.15)",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
