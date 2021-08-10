import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useFont from "./src/hooks/useFont";
import AppLoading from "expo-app-loading";
import Login from "./src/stacks/Login";
const Stack = createStackNavigator();

export default function App() {
  const isLoaded = useFont();
  if (!isLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <Stack.Navigator screenOptions={{ headerMode: "none" }}>
          <Stack.Screen component={Login} name="Login" />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
