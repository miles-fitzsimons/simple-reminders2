import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

import Header from "./src/components/Header";
import Main from "./src/components/Main";

const App = () => (
  <ThemeProvider>
    <View style={styles.container}>
      <Header>Header</Header>
      <Button
        buttonStyle={{ backgroundColor: "red", width: "50%" }}
        title="Hey"
      />
    </View>
  </ThemeProvider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
  }
});
