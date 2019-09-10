import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AsyncStorage, ScrollView } from "react-native";

import Reminder from "./Reminder";

const EditReminder = ({ navigation }) => {
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

  const onConfirmDate = data => {
    console.log("Confirmed", data);
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

      <TimeInput onConfirm={onConfirmDate} />
    </Main>
  );
};

export default EditReminder;
