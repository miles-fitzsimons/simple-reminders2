import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import { Input } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

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
  const now = dayjs();

  const [date, setDate] = useState(now);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const onFocusDateInput = () => {
    setIsDatePickerVisible(true);
  };

  const onFocusTimeInput = () => {
    setIsTimePickerVisible(true);
  };

  console.log("DATE", typeof date, date);
  console.log("dayjs", typeof dayjs(), dayjs());

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
            value={`${date
              .add(1, "day")
              .date()}/${date.month()}/${date.year()}`}
            leftIcon={{ type: "font-awesome", name: "calendar" }}
            label="Day"
            leftIconContainerStyle={{ marginHorizontal: 10 }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onFocusTimeInput}>
        <View style={styles.container} pointerEvents="none">
          <Input
            editable={false}
            value={`${date.hour()}:${date.minute()}`}
            leftIcon={{ type: "feather", name: "clock" }}
            label="Time"
            leftIconContainerStyle={{ marginHorizontal: 10 }}
          />
        </View>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={new Date(dayjs())}
        onCancel={() => {
          setIsDatePickerVisible(false);
        }}
        onConfirm={data => {
          setIsDatePickerVisible(false);
          setDate(dayjs(data));
        }}
      />

      <DateTimePicker
        isVisible={isTimePickerVisible}
        mode="time"
        // minimumDate={new Date(Date.now())}
        onCancel={() => {
          setIsTimePickerVisible(false);
        }}
        onConfirm={data => {
          // MILES WHY IS THIS COMING OUT 12 HOURS EARLIER??
          console.log("CONFIRM DATA", dayjs(data));
          setDate(dayjs(data));
          setIsTimePickerVisible(false);
        }}
      />
    </Main>
  );
};

export default AddReminder;
