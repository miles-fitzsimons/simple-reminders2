import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { AsyncStorage, ScrollView } from "react-native";
import { Input } from "react-native-elements";

import DateInput from "./DateInput";
import Main from "./Main";
import Reminder from "./Reminder";
import TimeInput from "./TimeInput";

const EditReminder = ({ navigation }) => {
  console.log("nav", navigation);

  const xx = navigation.getParam("title");
  console.log("xxxx", xx);

  const reminder = navigation.getParam("item");
  console.log("remin", reminder);

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

  const onConfirmDate = date => {
    console.log("Confirmed date", date);
  };

  const onConfirmTime = time => {
    console.log("Confirmed time", time);
  };

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

      <TimeInput onConfirm={onConfirmTime} />
    </Main>
  );
};

export default EditReminder;
