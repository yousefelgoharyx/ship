import React from "react";
import { StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import Card from "../components/Card";
import { Page, PageWrapper } from "../components/Page";
const Returns = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        onOpenDrawer={() => navigation.openDrawer()}
        onSearch={(t) => t}
        title="مرتجعة"
      />
      <PageWrapper>
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
  latestHead: {
    fontSize: 18,
  },
});

export default Returns;
