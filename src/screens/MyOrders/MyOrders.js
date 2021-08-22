import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import Spacer from "../../components/Spacer";
import { createStackNavigator } from "@react-navigation/stack";
const Stacks = createStackNavigator();
import MyOrder from "./MyOrder";
const MyOrdersStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerMode: "none" }}>
      <Stacks.Screen name="MyOrders" component={MyOrders} />
      <Stacks.Screen name="MyOrder" component={MyOrder} />
    </Stacks.Navigator>
  );
};
const MyOrders = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={() => navigation.openDrawer()}
        title="طلباتي"
      />
      <PageWrapper>
        <Card onPress={() => navigation.navigate("MyOrder")} />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
      </PageWrapper>
    </Page>
  );
};

export default MyOrdersStack;
