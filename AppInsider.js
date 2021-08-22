import React from "react";
import { useAuth } from "./src/context/auth";
import Login from "./src/stacks/Login";
import Main from "./src/stacks/Main";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const AppInsider = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      {user.isLogged ? (
        <Stack.Screen component={Main} name="Main" />
      ) : (
        <Stack.Screen component={Login} name="Login" />
      )}
    </Stack.Navigator>
  );
};

export default AppInsider;
