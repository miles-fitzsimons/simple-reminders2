import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { AsyncStorage, ScrollView } from "react-native";

import Reminder from "./Reminder";

import ReminderContext from "../contexts/ReminderContext";

// const onPressReminder = input => () => {
//   console.log("Again", input);
// };

// call async in component
// context = useContext...
// set it in effect

const RemindersList = () => {
  // const [data, setData] = useState(null);
  // const context = useContext(ReminderContext);
  // console.log("CONTE", context);
  // useEffect(() => {
  //   const getItems = async () => {
  //     await AsyncStorage.getItem("tempData")
  //       // await AsyncStorage.setItem("tempData", JSON.stringify(initialState))
  //       .then(res => {
  //         context.addReminder(res[0]);
  //         setData(JSON.parse(res));
  //       })
  //       .catch(e => {
  //         console.log("Err", e);
  //       });
  //   };

  //   getItems();
  // }, []);

  // I subscribe.
  // Home is the provider

  xx = 1;

  return (
    <ReminderContext.Consumer>
      {({ reminders: data }) =>
        console.log("Context", data) || (
          <ScrollView>
            <View>
              {/* Need this to be reminders not data */}
              {data &&
                data.map((item, i) => (
                  <Reminder item={item} key={`Reminder ${i}`} />
                ))}
            </View>
          </ScrollView>
        )
      }
    </ReminderContext.Consumer>
  );
};

export default RemindersList;

// MILES MOVE ME INTO A FILE
// const initialState = [
//   {
//     reminderText: "Feed the cat",
//     repeats: false,
//     dueDate: new Date(2019, 9, 4, 13, 22)
//   },
//   {
//     reminderText: "Top up Snapper",
//     repeats: true,
//     dueDate: new Date(2019, 10, 25, 13, 22)
//   },
//   {
//     reminderText: "Do a chore",
//     repeats: true,
//     dueDate: new Date(2019, 10, 25, 13, 22)
//   },
//   {
//     reminderText: "Take a photo",
//     repeats: true,
//     dueDate: new Date(2019, 10, 25, 13, 22)
//   },
//   {
//     reminderText: "Take out rubbish",
//     repeats: false,
//     dueDate: new Date(2020, 3, 9, 4, 3)
//   }
// ];
