import { createStackNavigator } from "react-navigation-stack";

import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";
import Home from "./Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    // screen: AddReminder
    navigationOptions: {
      headerTitle: "Hi there"
    }
  },

  EditReminder: {
    screen: EditReminder,
    navigationOptions: {
      headerTitle: "Edit reminder"
    }
  },
  AddReminder: {
    screen: AddReminder,
    navigationOptions: {
      headerTitle: "Add reminder"
    }
  }
});

export default AppNavigator;
