import React from "react";
import { Icon } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { withNavigation } from "react-navigation";

const Button = ({ navigation, theme }) => (
  <Icon
    name="plus-circle"
    type="font-awesome"
    color={theme.colors.primary}
    onPress={() => navigation.navigate("AddReminder")}
    size={90}
  />
);

export default withNavigation(withTheme(Button));
