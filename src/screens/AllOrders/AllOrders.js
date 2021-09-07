import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import { Page, PageWrapper } from "../../components/Page";
import { createStackNavigator } from "@react-navigation/stack";
import Order from "./Order";
import { View } from "react-native";
import api from "../../util/authAxios";
import { useAuth } from "../../context/auth";
import Spinner from "../../components/Spinner";
const Stacks = createStackNavigator();
const AllOrdersStack = () => {
  return (
    <Stacks.Navigator screenOptions={{ headerMode: "none" }}>
      <Stacks.Screen name="AllOrders" component={AllOrders} />
      <Stacks.Screen name="Order" component={Order} />
    </Stacks.Navigator>
  );
};


const AllOrders = ({ navigation }) => {
  const { auth } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api(auth.token)
      .get("/all-orders.php")
      .then((res) => {
        setOrders([res.data]);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={() => navigation.openDrawer()}
        title="جميع الطلبات"
      />

      <PageWrapper>
        {loading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Spinner color="#000" size={32} />
          </View>
        ) : (
          orders.map((order) => (
            <View key={order.id}>
              <Card
                name={order.recipient_name}
                address={order.recipient_address}
                city={order.recipient_city}
                onPress={() => navigation.navigate("Order", {
                  id: order.id
                })}
              />
              <Spacer />
            </View>
          ))
        )}
      </PageWrapper>
    </Page>
  );
};

export default AllOrdersStack;
