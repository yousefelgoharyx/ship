import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";
import { MaterialIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

const links = [
  {
    route: "Home",
    icon: "local-shipping",
    name: "جميع الطلبات",
  },
  {
    route: "Orders",
    icon: "source",
    name: "طلباتي",
  },
  {
    route: "Ship",
    icon: "send",
    name: "تسليم شحنة",
  },
  {
    route: "Wallet",
    icon: "credit-card",
    name: "محفظتي",
  },
  {
    route: "Backs",
    icon: "swap-horiz",
    name: "مرتجعة",
  },
  {
    route: "Notis",
    icon: "notifications",
    name: "اشعارات",
  },
  {
    route: "Settings",
    icon: "settings",
    name: "اعدادات",
  },
  {
    route: "Ticket",
    icon: "confirmation-number",
    name: "تذكرة دعم",
  },
  {
    route: "Logout",
    icon: "logout",
    name: "خروج",
  },
];
const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={({ state, navigation }) => {
        console.log("---------------------------------------------------");
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
            <ScrollView>
              {links.map((link) => {
                return (
                  <>
                    <Spacer space={8} />
                    <Link
                      icon={link.icon}
                      onPress={() => navigation.navigate(link.route)}
                      active={state.routeNames[state.index] === link.route}
                    >
                      {link.name}
                    </Link>
                  </>
                );
              })}

           
            </ScrollView>
          </View>
        );
      }}
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Orders" component={Home} />
    </Drawer.Navigator>
  );
};

const Link = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={
        props.active
          ? [styles.link, { backgroundColor: "#ff333320" }]
          : styles.link
      }
    >
      <MaterialIcons
        name={props.icon}
        style={
          props.active
            ? [styles.linkIcon, { color: "#ff3333" }]
            : styles.linkIcon
        }
        size={24}
      />
      <StyledText
        style={
          props.active
            ? { ...styles.linkText, color: "#ff3333" }
            : styles.linkText
        }
      >
        {props.children}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },

  linkIcon: {
    marginLeft: 8,
    color: "#999",
  },

  linkText: {
    color: "#999",
  },
});

export default Main;
