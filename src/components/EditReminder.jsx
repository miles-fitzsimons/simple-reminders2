import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { AsyncStorage, ScrollView } from "react-native";
import { Input } from "react-native-elements";

// import ReminderProvider from '../contexts/ReminderProvider'

import DateInput from "./DateInput";
import Main from "./Main";
import Reminder from "./Reminder";
import TimeInput from "./TimeInput";

// Provider holds state and methods for updating them??
//

// WHERE DO I CALL ASYNC STORAGE?

// need context now.
// This edit reminder component needs to know about all
// the reminders in order to update and store it.
// can the entire state be passed into this component?
// ----- No because editReminder is navigated to from Reminder,
// ----- and not passed as a prop.

// Where is state? RemindersList
// Needs to be here

// I'll use effect here to asyncStorage

const EditReminder = ({ navigation }) => {
  //   const reminder = navigation.getParam("item");

  const reminder = {
    reminderText: "Top up Snapper",
    dueDate: "2019-11-25T00:22:00.000Z",
    repeats: true
  };

  //   console.log("remin", reminder, dueDate);
  const { dueDate, reminderText, repeats } = reminder;

  const [updatedText, setUpdatedText] = useState(null);

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
          value={updatedText ? updatedText : reminderText}
          //   value={updatedText ? updatedText : reminderText}
          onChange={e => {
            console.log("EE", e.nativeEvent.text);
            setUpdatedText(e.nativeEvent.text);
          }}
        />
      </View>

      <DateInput onConfirm={onConfirmDate} />

      <TimeInput onConfirm={onConfirmTime} />
    </Main>
  );
};

export default EditReminder;
