import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";
import * as Localization from "expo-localization";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment-timezone";
import React, { useState } from "react";

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

const TimeInput = ({ onConfirm }) => {
  const timezone = Localization.timezone;
  const now = moment(new Date(), timezone);

  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  const onFocusTimeInput = () => {
    setIsTimePickerVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onFocusTimeInput}>
        <View style={styles.container} pointerEvents="none">
          <Input
            editable={false}
            value={
              selectedTime
                ? `${selectedTime.hour()}:${selectedTime.minute()}`
                : `${now.hour()}:${now.minute()}`
            }
            leftIcon={{ type: "feather", name: "clock" }}
            label="Time"
            leftIconContainerStyle={{ marginHorizontal: 10 }}
          />
        </View>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isTimePickerVisible}
        is24Hour={false}
        mode="time"
        onCancel={() => {
          setIsTimePickerVisible(false);
        }}
        onConfirm={result => {
          var time = moment(result).tz(timezone);
          setIsTimePickerVisible(false);
          setSelectedTime(time);
          onConfirm(time);
        }}
      />
    </>
  );
};

export default TimeInput;
