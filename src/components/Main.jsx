import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

const Main = ({ children }) => <View style={styles.main}>{children}</View>;

export default Main;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    height: "100%"
  }
});
