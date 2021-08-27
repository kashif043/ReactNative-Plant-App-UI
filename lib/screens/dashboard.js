import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/home/home";
import Settings from "../screens/settings/settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const DashBoard = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00BFFF"
      inactiveColor="grey"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-home" color={"#00BFFF"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-settings" color={"#00BFFF"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashBoard;
