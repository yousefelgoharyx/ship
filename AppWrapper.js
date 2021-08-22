import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useFont from "./src/hooks/useFont";
import AppLoading from "expo-app-loading";
import { CountProvider } from "./src/context/auth";

export default function AppWrappper({ children }) {
  const isLoaded = useFont();
  if (!isLoaded) return <AppLoading />;
  return (
    <CountProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#2B1253" barStyle="light-content" />
        {children}
      </NavigationContainer>
    </CountProvider>
  );
}
