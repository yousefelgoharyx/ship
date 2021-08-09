import React from "react";
import { StyleSheet, Text, View, StatusBar, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useFont from "./src/hooks/useFont";
const Stack = createStackNavigator();

function StyledText({children, weight, style}) {
  let fontFamily = 'Cairo_400Regular';
  if (weight === 700 || weight === 'bold') fontFamily = 'Cairo_700Bold'
  return (
    <Text style={{...style, fontFamily}}>{children}</Text>
  )
}

function Home() {
  return (
    <View style={styles.container}>
      <StyledText>اهلا صفحة 1</StyledText>
      <Button title="الي صفحة 1" onPress={() => navigation.navigate('home2')} />
    </View>
  );
}

function Home2() {
  return (
    <View style={styles.container}>
      <StyledText>اهلا صفحة 1</StyledText>
      <Button title="الي صفحة 1" onPress={() => navigation.navigate('home2')} />
    </View>
  );
}
export default function App() {
  useFont();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Home2} name="home2" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    direction: "rtl",
  },
});
