import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Detail from "../../components/Detail";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import Spacer from "../../components/Spacer";

const Order = ({ navigation }) => {
  return (
    <Page>
      <Navbar
        title="تفاصيل الطلب"
        onGoBack={() => navigation.goBack()}
      />
      <PageWrapper>
        <Details>
          <Detail head="اسم المستلم:" subhead="يوسف مجدي" />
          <Detail head="رقم هاتف المستلم" subhead="01225371649" />
          <Detail
            head="عنوان المستلم:"
            subhead="محرم بيك نادي الصيد شارع الاخلاص عمارة ابو رضا"
          />
          <Detail head="تفاصيل الشحنة:" subhead="خاتم فضة" />
          <Detail head="اسم المرسل:" subhead="محمد علي" />
          <Detail head="عنوان المرسل:" subhead="الحضرة الجديدة شارع الازالة" />
          <Detail head="رقم هاتف المرسل:" subhead="0125367184" />
          <Detail head="المبلغ" subhead="560 جنيه" />
        </Details>
        <Spacer />
        <Button>تحصيل الشحنة</Button>
      </PageWrapper>
    </Page>
  );
};


export default Order;
