import React from "react";
import Button from "../../components/Button";
import Detail from "../../components/Detail";
import Details from "../../components/Details";
import Navbar from "../../components/Navbar";
import { Page, PageWrapper } from "../../components/Page";
import PageDataControl from "../../components/PageDataControl";
import Spacer from "../../components/Spacer";

const MyOrder = ({ navigation }) => {
  return (
    <Page>
      <Navbar title="طلب" onGoBack={navigation.goBack} />
      <PageWrapper>
        <PageDataControl>
          <Details>
            <Detail head="رقم الشحنة" subhead="#14535" />
            <Detail head="اخر تحديث" subhead="منجوبنا استلم الشحنة" />
          </Details>
          <Spacer />
          <Button disabled small>
            استلمت الشحنة
          </Button>
          <Spacer space={8} />
          <Button loading small disabled>
            يتم تجهييز الشحنة
          </Button>
          <Spacer space={8} />
          <Button small>جاري تسليم الشحنة</Button>
        </PageDataControl>
      </PageWrapper>
    </Page>
  );
};

export default MyOrder;
