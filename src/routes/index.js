import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../page/Home";
import Info from "../page/Info";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Info"
          component={Info}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
