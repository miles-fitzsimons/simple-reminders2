import React from "react";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import { Input } from "react-native-elements";

import Main from "./Main";

import DateInput from "./DateInput";
import TimeInput from "./TimeInput";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.8,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    paddingHorizontal: 10
  }
});

const onConfirmDate = data => {
  console.log("Confirmed", data);
};

const AddReminder = () => {
  return (
    <Main>
      <View style={styles.container}>
        <Input
          placeholder="Remind me to..."
          leftIcon={{ type: "material-community", name: "reminder" }}
          label="Remind me to..."
          leftIconContainerStyle={{ marginHorizontal: 10 }}
        />
      </View>

      <DateInput onConfirm={onConfirmDate} />

      <TimeInput onConfirm={onConfirmDate} />
    </Main>
  );
};

export default AddReminder;
