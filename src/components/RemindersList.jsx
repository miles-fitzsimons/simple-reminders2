import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AsyncStorage, ScrollView } from "react-native";

import Reminder from "./Reminder";

const initialState = [
  {
    reminderText: "Feed the cat",
    repeats: false,
    dueDate: new Date(2019, 9, 4, 13, 22)
  },
  {
    reminderText: "Top up Snapper",
    repeats: true,
    dueDate: new Date(2019, 10, 25, 13, 22)
  },
  {
    reminderText: "Top up Snapper",
    repeats: true,
    dueDate: new Date(2019, 10, 25, 13, 22)
  },
  {
    reminderText: "Top up Snapper",
    repeats: true,
    dueDate: new Date(2019, 10, 25, 13, 22)
  },
  {
    reminderText: "Take out rubbish",
    repeats: false,
    dueDate: new Date(2020, 3, 9, 4, 3)
  }
];

const RemindersList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getItems = async () => {
      await AsyncStorage.getItem("tempData")
        // await AsyncStorage.setItem("tempData", JSON.stringify(initialState))
        .then(res => {
          setData(JSON.parse(res));
        })
        .catch(e => {
          console.log("Err", e);
        });
    };

    getItems();
  }, []);

  return (
    <ScrollView>
      <View>
        {data &&
          data.map((item, i) => {
            return <Reminder item={item} key={`Reminder ${i}`} />;
          })}
      </View>
    </ScrollView>
  );
};

export default RemindersList;
