import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import Card from "../components/Card";

const Returns = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar
        onOpenDrawer={() => navigation.openDrawer()}
        onSearch={(t) => t}
        title="محفظتي"
      />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <StyledText style={styles.latestHead} weight="bold">
          اخر الطلبات
        </StyledText>
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
    direction: "rtl",
  },
  wrapper: {
    padding: 16,
  },
  latestHead: {
    fontSize: 18,
  },
});

export default Returns;
