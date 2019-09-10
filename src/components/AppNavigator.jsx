import { createStackNavigator } from "react-navigation-stack";

import AddReminder from "./AddReminder";
import EditReminder from "./EditReminder";
import Home from "./Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
    // screen: AddReminder
  },

  EditReminder: {
    screen: EditReminder
  },
  AddReminder: {
    screen: AddReminder
  }
});

export default AppNavigator;
