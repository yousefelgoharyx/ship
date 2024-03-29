import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useFont from "./src/hooks/useFont";
import AppLoading from "expo-app-loading";
import { AuthProvider } from "./src/context/auth";
import AppInsider from "./AppInsider";

export default function App() {
  const isLoaded = useFont();

  if (!isLoaded) return <AppLoading />;
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#2B1253" barStyle="light-content" />
        <AppInsider />
      </NavigationContainer>
    </AuthProvider>
  );
}
