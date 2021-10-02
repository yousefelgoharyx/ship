import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";
import { Page, PageWrapper } from "../components/Page";

const Noti = (props) => {
  return (
    <View style={styles.noti}>
      <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
        <MaterialIcons name="notifications" color="#000" size={24} />
        <Spacer space={4} />
        <StyledText style={styles.head} weight="bold">
          {props.head}
        </StyledText>
      </View>
      <Spacer space={4} />
      <StyledText style={styles.subhead}>{props.content}</StyledText>
    </View>
  );
};
const Notis = ({ navigation }) => {
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="الاشعارات" />
      <PageWrapper hasPadding>
        <Noti head="ادارة الشركة" content="اشعار تجريبي" />
      </PageWrapper>
    </Page>
  );
};

const styles = StyleSheet.create({
  
  noti: {
    backgroundColor: "#fff",
    padding: 16,
    elevation: 1,
    borderRadius: 8,
    alignItems: "flex-end",
  },
  head: {
    fontSize: 16,
    textAlign: 'right'
  },
  subhead: {
    fontSize: 14,
    textAlign: 'right'
  },
});

export default Notis;
