import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import { Page, PageWrapper } from "../components/Page";
const AllOrders = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        options={["شحنات تم طلبها", "شحنات جاري توصيلها", "شحنات تم توصيلها"]}
        onOpenDrawer={() => navigation.openDrawer()}
        title="جميع الطلبات"
      />

      <PageWrapper>
        <Card onPress={() => navigation.navigate("Order")} />
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

export default AllOrders;
