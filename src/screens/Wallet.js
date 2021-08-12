import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import Card from "../components/Card";
import { Page, PageWrapper } from "../components/Page";
const Deliver = ({ navigation }) => {
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="محفظتي" />
      <PageWrapper>
        <View style={styles.wallet}>
          <View>
            <StyledText style={styles.head} weight="bold">
              تم تحصيل مبلغ
            </StyledText>
            <Spacer space={2} />
            <StyledText style={styles.subhead}>5000 جنيه</StyledText>
          </View>
          <Button small style={styles.walletButton}>سحب</Button>
        </View>
        <Spacer />
        <StyledText style={styles.latestHead} weight="bold">
          اخر الطلبات
        </StyledText>
        <Spacer />
        <Card />
      </PageWrapper>
    </Page>
  );
};

const styles = StyleSheet.create({
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
