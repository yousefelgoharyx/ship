import React, { useState } from "react";
import { View } from "react-native";
import fetchOrder from "../../api/fetchOrder";
import BottomModal from "../../components/BottomModal";
import Button from "../../components/Button";
import Detail from "../../components/Detail";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import PageDataControl from "../../components/PageDataControl";
import Spacer from "../../components/Spacer";
import StyledText from "../../components/StyledText";
import useFetch from "../../hooks/useFetch";

const Order = ({ navigation, route }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handler = useFetch(fetchOrder);

  let content = null;

  if (handler.error) content = <Error retry={handler.refresh} />;
  if (!handler.loading && !handler.error) {
    const order = handler?.data;
    const address = order?.recipient_address + " - " + order?.recipient_city;
    content = (
      <>
        <Details>
          <Detail head="اسم المستلم:" subhead={order?.recipient_name} />
          <Detail head="رقم هاتف المستلم" subhead={order?.recipient_phone} />
          <Detail head="عنوان المستلم:" subhead={address} />
          <Detail head="تفاصيل الشحنة:" subhead={order?.product} />
          <Detail head="اسم المرسل:" subhead={order?.merchant_name} />
          <Detail head="عنوان المرسل:" subhead={order?.merchant_address} />
          <Detail head="رقم هاتف المرسل:" subhead={order?.merchant_phone} />
          <Detail head="المبلغ" subhead={order?.price} />
        </Details>
        <Spacer />
        <Button onPress={() => collect()} loading={loading}>
          تحصيل الشحنة
        </Button>
      </>
    );
  }

  const collect = async () => {
    console.log("s");
    setLoading(true);
    setTimeout(() => {
      setOpen(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <Page>
      <Navbar title="تفاصيل الطلب" onGoBack={() => navigation.goBack()} />
      <PageWrapper>
        <BottomModal visible={open} onRequestClose={() => setOpen(false)}>
          <View style={{ backgroundColor: "#fff", padding: 32 }}>
            <StyledText style={{ textAlign: "center" }} weight="bold">
              تم تحصيل الشحنة
            </StyledText>
          </View>
        </BottomModal>
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

export default Order;
