import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import Card from "../components/Card";

const Deliver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="محفظتي" />
      <ScrollView contentContainerStyle={styles.walletWrapper}>
        <View style={styles.wallet}>
          <View>
            <StyledText style={styles.head} weight="bold">
              تم تحصيل مبلغ
            </StyledText>
            <Spacer space={2} />
            <StyledText style={styles.subhead}>5000 جنيه</StyledText>
          </View>
          <Button style={styles.walletButton}>سحب</Button>
        </View>
        <Spacer />
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
  walletWrapper: {
    padding: 16,
  },
  wallet: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    borderRadius: 8,

    elevation: 1,
  },
  walletButton: {
    flexShrink: 0,
    width: "40%",
  },
  head: {
    fontSize: 16,
  },
  subhead: {
    fontSize: 12,
  },
  latestHead: {
    fontSize: 18,
  },
});

export default Deliver;
