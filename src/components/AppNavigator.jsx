import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./Home";
import { Text } from "react-native";

const AddReminder = () => <Text>ADDDDDD</Text>;

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  AddReminder: {
    screen: AddReminder
  }
});

export default AppNavigator;
