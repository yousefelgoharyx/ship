import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import { Page, PageWrapper } from "../components/Page";
import PageDataControl from "../components/PageDataControl";
import Error from "../components/Error";
import fetchWallet from "../api/fetchWallet";
import useFetch from "../hooks/useFetch";
const Deliver = ({ navigation }) => {
  const handler = useFetch(fetchWallet);
  let content = null;
  if (handler.error) {
    content = <Error retry={handler.refresh} />;
  }

  if (!handler.loading && !handler.error) {
    content = (
      <View style={styles.wallet}>
        <View style={styles.walletWrapper}>
          <StyledText style={styles.head} weight="bold">
            تم تحصيل مبلغ
          </StyledText>
          <Spacer space={2} />
          <StyledText style={styles.subhead}>
            {handler.data.funds} جنيه
          </StyledText>
        </View>
        <Button small style={styles.walletButton}>
          سحب
        </Button>
      </View>
    );
  }
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="محفظتي" />
      <PageWrapper>
        <PageDataControl
          refreshing={handler.loading}
          onRefresh={handler.refresh}
        >
          {content}
        </PageDataControl>
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
  walletWrapper: {
    flexGrow: 0,
    flexShrink: 1,
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
