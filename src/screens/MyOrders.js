import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";

const MyOrders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={() => navigation.openDrawer()}
        title="طلباتي"
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

export default MyOrders;
