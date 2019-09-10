import React from "react";

import ReminderContext from "./ReminderContext";

const ReminderProvider = ({ children }) => {
  const reminders = [
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
      reminderText: "Do a chore",
      repeats: true,
      dueDate: new Date(2019, 10, 25, 13, 22)
    },
    {
      reminderText: "Take a photo",
      repeats: true,
      dueDate: new Date(2019, 10, 25, 13, 22)
    },
    {
      reminderText: "Take out rubbish",
      repeats: false,
      dueDate: new Date(2020, 3, 9, 4, 3)
    }
  ];

  const addReminder = reminder => {
    reminders.push(reminder);
  };

  return (
    <ReminderContext.Provider value={{ addReminder, reminders }}>
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderProvider;
