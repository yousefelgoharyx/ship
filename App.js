import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useFont from "./src/hooks/useFont";
import AppLoading from "expo-app-loading";
import Login from "./src/stacks/Login";
import Main from "./src/stacks/Main";
const Stack = createStackNavigator();

export default function App() {
  const isLoaded = useFont();
  if (!isLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ff3333" barStyle="light-content" />

        <Stack.Navigator screenOptions={{ headerMode: "none" }}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Main} name="Main" />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
