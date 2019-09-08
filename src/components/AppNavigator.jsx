import { createStackNavigator } from "react-navigation-stack";

import AddReminder from "./AddReminder";
import Home from "./Home";

const AppNavigator = createStackNavigator({
  Home: {
    // screen: Home
    screen: AddReminder
  },
  AddReminder: {
    screen: AddReminder
  }
});

export default AppNavigator;
