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

const DateInput = ({ onConfirm }) => {
  const timezone = Localization.timezone;
  const now = moment(new Date(), timezone);

  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const onFocusDateInput = () => {
    setIsDatePickerVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onFocusDateInput}>
        <View style={styles.container} pointerEvents="none">
          <Input
            editable={false}
            value={
              selectedDate
                ? `${selectedDate.date()}/${selectedDate.month() +
                    1}/${selectedDate.year()}`
                : `${now.add(1, "d").date()}/${now.month() + 1}/${now.year()}`
            }
            leftIcon={{ type: "font-awesome", name: "calendar" }}
            label="Day"
            leftIconContainerStyle={{ marginHorizontal: 10 }}
          />
        </View>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={now.toDate()}
        onCancel={() => {
          setIsDatePickerVisible(false);
        }}
        onConfirm={result => {
          var date = moment(result).tz(timezone);
          setIsDatePickerVisible(false);
          setSelectedDate(date);
          onConfirm(date);
        }}
      />
    </>
  );
};

export default DateInput;
