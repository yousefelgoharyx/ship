import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import { Page, PageWrapper } from "../../components/Page";
import { createStackNavigator } from "@react-navigation/stack";
const Stacks = createStackNavigator();
import Order from "./Order";
import { View } from "react-native";
const AllOrdersStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerMode: "none" }}>
      <Stacks.Screen name="AllOrders" component={AllOrders} />
      <Stacks.Screen name="Order" component={Order} />
    </Stacks.Navigator>
  );
};

const allCards = Array.from({ length: 5 }, (v, i) => i);
const AllOrders = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        options={["شحنات تم طلبها", "شحنات جاري توصيلها", "شحنات تم توصيلها"]}
        onOpenDrawer={() => navigation.openDrawer()}
        title="جميع الطلبات"
      />

      <PageWrapper>
        {allCards.map((card) => (
          <View key={card}>
            <Card onPress={() => navigation.navigate("Order")} />
            <Spacer />
          </View>
        ))}
      </PageWrapper>
    </Page>
  );
};

export default AllOrdersStack;
