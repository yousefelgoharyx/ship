import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Spacer from "../../components/Spacer";
import { Page, PageWrapper } from "../../components/Page";
import Error from "../../components/Error";
import PageDataControl from "../../components/PageDataControl";
import EmptyContent from "../../components/EmptyContent";
import { View } from "react-native";
import useFetch from "../../hooks/useFetch";
import fetchOrders from "../../api/fetchOrders";
const AllOrders = ({ navigation }) => {
  const handler = useFetch(fetchOrders);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      handler.refresh();
    });
    return unsubscribe;
  }, [navigation]);

  let content = null;
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
                navigation.navigate("Order", {
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
  if (handler.error) {
    content = <Error retry={handler.refresh} />;
  }

  return (
    <Page>
      <Navbar
        onSearch={(text) => console.log(text)}
        onOpenDrawer={navigation.openDrawer}
        title="جميع الطلبات"
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

export default AllOrders;
