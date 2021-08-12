import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Page, PageWrapper } from "../components/Page";
import Spacer from "../components/Spacer";
const MyOrders = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={() => navigation.openDrawer()}
        title="طلباتي"
      />
      <PageWrapper>
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
      </PageWrapper>
    </Page>
  );
};

export default MyOrders;
