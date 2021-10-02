import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MyOrder from "./MyOrder";
import MyOrders from "./MyOrders";
const Stacks = createStackNavigator();
const MyOrdersStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerMode: "none" }}>
      <Stacks.Screen name="MyOrders" component={MyOrders} />
      <Stacks.Screen name="MyOrder" component={MyOrder} />
    </Stacks.Navigator>
  );
};

export default MyOrdersStack;
