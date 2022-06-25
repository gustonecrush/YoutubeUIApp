import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import SubscriptionScreen from "../screens/SubscriptionScreen";
import LibraryScreen from "../screens/LibraryScreen";
import BottomNavigator from "../components/BottomNavigator";
import AddScreen from "../screens/AddScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Add"
      component={AddScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Subscription"
      component={SubscriptionScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
