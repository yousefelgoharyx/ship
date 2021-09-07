import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Detail from "../../components/Detail";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import Spacer from "../../components/Spacer";
import Spinner from "../../components/Spinner";
import { useAuth } from "../../context/auth";
import api from "../../util/authAxios";

const Order = ({ navigation, route }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { auth } = useAuth();
  useEffect(() => {
    console.log(auth.token, route.params.id);
    api(auth.token)
      .post("get-details.php", { id: route.params.id })
      .then((res) => {
        setOrder(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("data");
        setLoading(false);
      });
  }, []);
  let content = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Spinner color="#000" size={32} />
    </View>
  );
  if (!loading) {
    content = (
      <>
        <Details>
          <Detail
            head="اسم المستلم:"
            subhead={order.recipient_name || "غير متاح"}
          />
          <Detail
            head="رقم هاتف المستلم"
            subhead={order.recipient_phone || "غير متاح"}
          />
          <Detail
            head="عنوان المستلم:"
            subhead={order.recipient_address || "غير متاح"}
          />
          <Detail head="تفاصيل الشحنة:" subhead={order.product || "غير متاح"} />
          <Detail
            head="اسم المرسل:"
            subhead={order.merchant_name || "غير متاح"}
          />
          <Detail head="عنوان المرسل:" subhead="الحضرة الجديدة شارع الازالة" />
          <Detail head="رقم هاتف المرسل:" subhead="0125367184" />
          <Detail head="المبلغ" subhead="560 جنيه" />
        </Details>
        <Spacer />
        <Button>تحصيل الشحنة</Button>
      </>
    );
  }
  return (
    <Page>
      <Navbar title="تفاصيل الطلب" onGoBack={() => navigation.goBack()} />
      <PageWrapper>{content}</PageWrapper>
    </Page>
  );
};

export default Order;
