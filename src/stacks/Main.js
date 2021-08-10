import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Image, TouchableOpacity, View } from "react-native";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";
import { MaterialIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={({ state }) => {
        console.log(state);
        return (
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ff3333",
                padding: 16,
              }}
            >
              <Image
                style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
                source={{
                  uri: "http://thebodyisnotanapology.com/wp-content/uploads/2018/02/pexels-photo-459947.jpg",
                }}
              />
              <Spacer space={8} />
              <StyledText
                style={{ color: "#fff", textAlign: "center" }}
                weight="bold"
              >
                يوسف مجدي عبدالعظيم
              </StyledText>
              <StyledText style={{ color: "#fff", textAlign: "center" }}>
                yousefelgoharyx@gmail.com
              </StyledText>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  padding: 16,
                }}
              >
                <MaterialIcons
                  name="local-activity"
                  style={{ marginLeft: 8 }}
                  size={24}
                />
                <StyledText>جميع الطلبات</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Main;
