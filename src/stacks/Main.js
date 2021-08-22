import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import AllOrders from "../screens/AllOrders/AllOrders";
import MyOrders from "../screens/MyOrders/MyOrders";
import Deliver from "../screens/Deliver";
import Wallet from "../screens/Wallet";
import Returns from "../screens/Returns";
import Notis from "../screens/Notis";
import Settings from "../screens/Settings";
import Ticket from "../screens/Ticket";
import Stores from "../screens/Stores";
import { useAuth } from "../context/auth";

const Drawer = createDrawerNavigator();

const links = [
  {
    route: "AllOrdersStack",
    icon: "local-shipping",
    name: "جميع الطلبات",
    component: AllOrders,
  },
  {
    route: "MyOrdersStack",
    icon: "source",
    name: "طلباتي",
    component: MyOrders,
  },
  {
    route: "Stores",
    icon: "store",
    name: "متاجرنا",
    component: Stores,
  },
  {
    route: "Private",
    icon: "policy",
    name: "الطبات الخاصة",
    component: MyOrders,
  },
  {
    route: "Deliver",
    icon: "send",
    name: "تسليم شحنة",
    component: Deliver,
  },
  {
    route: "Wallet",
    icon: "credit-card",
    name: "محفظتي",
    component: Wallet,
  },
  {
    route: "Returns",
    icon: "swap-horiz",
    name: "مرتجعة",
    component: Returns,
  },
  {
    route: "Notis",
    icon: "notifications",
    name: "اشعارات",
    component: Notis,
  },
  {
    route: "Settings",
    icon: "settings",
    name: "اعدادات",
    component: Settings,
  },
  {
    route: "Ticket",
    icon: "confirmation-number",
    name: "تذكرة دعم",
    component: Ticket,
  },
];
const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerSider {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
      backBehavior="history"
    >
      {links.map((link) => (
        <Drawer.Screen name={link.route} component={link.component} key={link.route} />
      ))}
    </Drawer.Navigator>
  );
};

function DrawerSider({ state, navigation }) {
  const {user, logout} = useAuth()
  return (
    <ScrollView>
      <Profile
        image={"data:image/png;base64," + user.image}
        name={user.username}
        email={user.email}
      />
      <View style={{paddingBottom: 16}}>
        {links.map((link) => {
          return (
            <View key={link.route}>
              <Spacer space={8} />
              <Link
                icon={link.icon}
                onPress={() => navigation.navigate(link.route)}
                active={state.routeNames[state.index] === link.route}
              >
                {link.name}
              </Link>
            </View>
          );
        })}
        <Spacer space={8} />
        <Link
          icon="logout"
          onPress={logout}
          active={false}
        >
          خروج
        </Link>
      </View>
    </ScrollView>
  );
}

const Profile = (props) => {
  return (
    <View style={styles.profile}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <Spacer space={8} />
      <StyledText style={styles.text} weight="bold">
        {props.name}
      </StyledText>
      <StyledText style={styles.text}>{props.email}</StyledText>
    </View>
  );
};
const Link = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={
        props.active
          ? [styles.link, { backgroundColor: "#2B125320" }]
          : styles.link
      }
    >
      <MaterialIcons
        name={props.icon}
        style={
          props.active
            ? [styles.linkIcon, { color: "#2B1253" }]
            : styles.linkIcon
        }
        size={24}
      />
      <StyledText
        style={
          props.active
            ? { ...styles.linkText, color: "#2B1253" }
            : styles.linkText
        }
      >
        {props.children}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B1253",
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#ccc"
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
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
