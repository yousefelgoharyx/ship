import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";

const AllOrders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar
        onSearch={(text) => console.log(text)}
        options={["شحنات تم طلبها", "شحنات جاري توصيلها", "شحنات تم توصيلها"]}
        onOpenDrawer={() => navigation.openDrawer()}
        title="جميع الطلبات"
      />
      <ScrollView contentContainerStyle={{padding: 16}}>
          <Card />
          <Spacer />
          <Card />
          <Spacer />
          <Card />
          <Spacer />
          <Card />
          <Spacer />
          <Card />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    direction: 'rtl'
  },
});

export default AllOrders;
