import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Icon, Text, withTheme } from "react-native-elements";

const getStyles = theme =>
  StyleSheet.create({
    container: {
      width: Dimensions.get("window").width * 0.8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 20,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: theme.colors.primary
    },
    detailWrapper: {
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      paddingVertical: 5,
      alignItems: "center",
      justifyContent: "flex-start"
    },
    icon: {
      paddingHorizontal: 10
    }
  });

const Reminder = ({ item, theme }) => {
  const date = new Date(item.dueDate);
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("PRESS");
      }}
      style={styles.container}
    >
      <Text h3>{item.reminderText}</Text>
      <View style={styles.detailWrapper}>
        <Icon
          color="white"
          iconStyle={styles.icon}
          name="calendar"
          type="font-awesome"
          size={25}
        />

        <Text
          h4
          h4Style={{ color: "white" }}
        >{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Icon
          color="white"
          iconStyle={styles.icon}
          name="clock"
          type="feather"
          size={25}
        />

        <Text
          h4
          h4Style={{ color: "white" }}
        >{`${date.getHours()}:${date.getMinutes()}`}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Icon
          color="white"
          iconStyle={styles.icon}
          name="repeat"
          type="feather"
          size={25}
        />

        <Text h4 h4Style={{ color: "white" }}>
          SLIDER
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default withTheme(Reminder);
