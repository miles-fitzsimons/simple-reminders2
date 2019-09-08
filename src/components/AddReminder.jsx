import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import { Input } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";

import Main from "./Main";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const AddReminder = () => {
  const [date, setDate] = useState(Date.now());
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const onFocusDateInput = () => {
    setIsDateTimePickerVisible(true);
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
      <TouchableOpacity onPress={onFocusDateInput}>
        <View style={styles.container} pointerEvents="none">
          <Input
            editable={false}
            value="Tomorrow"
            leftIcon={{ type: "font-awesome", name: "calendar" }}
            label="Day"
            leftIconContainerStyle={{ marginHorizontal: 10 }}
          />
        </View>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        onCancel={() => {
          console.log("Cancel");
          setIsDateTimePickerVisible(false);
        }}
        onConfirm={() => {
          console.log("Confirm");
          setIsDateTimePickerVisible(false);
        }}
      />
    </Main>
  );
};

export default AddReminder;
