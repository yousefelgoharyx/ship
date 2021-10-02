import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import Spacer from "../../components/Spacer";
import PageDataControl from "../../components/PageDataControl";
import Error from "../../components/Error";
import EmptyContent from "../../components/EmptyContent";
import { View } from "react-native";
import fetchOrders from "../../api/fetchOrders";
import useFetch from "../../hooks/useFetch";
const MyOrders = ({ navigation }) => {
  const handler = useFetch(fetchOrders);
  let content = null;
  if (handler.error) {
    content = <Error retry={handler.refresh} />;
  }
  if (!handler.loading && !handler.error) {
    content =
      handler.data.length > 0 ? (
        handler.data.map((order) => (
          <View key={order.id}>
            <Card
              name={order?.recipient_name}
              address={order?.recipient_address}
              city={order?.recipient_city}
              key={order.id}
              onPress={() =>
                navigation.navigate("MyOrder", {
                  id: order.id,
                })
              }
            />
            <Spacer />
          </View>
        ))
      ) : (
        <EmptyContent />
      );
  }
  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={() => navigation.openDrawer()}
        title="طلباتي"
      />
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

export default MyOrders;
