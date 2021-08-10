import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar
        onSearch={(text) => console.log(text)}
        options={["شحنات تم طلبها", "شحنات جاري توصيلها", "شحنات تم توصيلها"]}
        onOpenDrawer={() => navigation.openDrawer()}
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
    backgroundColor: "#fff",
    flex: 1,
    direction: 'rtl'
  },
});

export default Home;
