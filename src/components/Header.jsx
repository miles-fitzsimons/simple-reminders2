import React from "react";
import { Header as ElementsHeader } from "react-native-elements";
import { StyleSheet } from "react-native";

const Header = () => (
  <ElementsHeader
    leftComponent={{ icon: "menu", color: "#fff" }}
    centerComponent={{
      text: "Simple Reminders",
      style: { fontSize: 18, color: "#fff" }
    }}
  />
);

export default Header;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
