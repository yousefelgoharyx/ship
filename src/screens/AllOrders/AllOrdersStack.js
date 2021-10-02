import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AllOrders from "./AllOrders";
import Order from "./Order";
const Stacks = createStackNavigator();
const AllOrdersStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerMode: "none" }}>
      <Stacks.Screen name="AllOrders" component={AllOrders} />
      <Stacks.Screen name="Order" component={Order} />
    </Stacks.Navigator>
  );
};

export default AllOrdersStack