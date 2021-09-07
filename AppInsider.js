import React from "react";
import { useAuth } from "./src/context/auth";
import Login from "./src/stacks/Login";
import Main from "./src/stacks/Main";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
const Stack = createStackNavigator();
const AppInsider = () => {
  const { auth } = useAuth();
  if (auth.loading) return <AppLoading />;
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      {auth.token ? (
        <Stack.Screen component={Main} name="Main" />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AppInsider;
