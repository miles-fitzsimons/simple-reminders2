import React from "react";
import { Icon } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { AsyncStorage } from "react-native";

const Button = ({ navigation, theme }) => (
  <Icon
    name="plus-circle"
    type="font-awesome"
    color={theme.colors.primary}
    onPress={() => navigation.navigate("AddReminder")}
    // onPress={() => onButtonPress()}
    size={90}
  />
);

export default withNavigation(withTheme(Button));
