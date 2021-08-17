import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";
import { Page, PageWrapper } from "../components/Page";

const Store = () => {
  return (
    <TouchableOpacity style={styles.store} activeOpacity={0.7}>
      <View style={{ flexDirection: "row-reverse", alignItems: 'center', padding: 8, paddingBottom: 0 }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/90269466_2908744532547643_7652441319746306048_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Kes-nKQQzJcAX-xldb6&_nc_ht=scontent.fcai21-3.fna&oh=0f5ac17126fbae4f410616370dce3602&oe=613FCF07",
          }}
        />
        <Spacer space={8} />

        <View style={styles.info}>
          <StyledText weight="bold" style={{ fontSize: 14 }}>
            كارفور سيتي سنتر
          </StyledText>
          <Spacer space={4} />
          <StyledText style={{ fontSize: 12, color: "#999" }}>
            5 طلبات
          </StyledText>
        </View>
      </View>
      <View style={styles.location}>
        <MaterialIcons name="place" size={16} />
        <Spacer space={8} />
        <StyledText style={styles.locationText}>
          نادي الصيد محرم بيك شارع الاخلاص
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};

const Stores = ({ navigation }) => {
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="الاشعارات" />
      <PageWrapper>
        <Store />
      </PageWrapper>
    </Page>
  );
};

const styles = StyleSheet.create({
  store: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    
  },
  image: {
    borderRadius: 16,
    width: 75,
    height: 75,
  },
  info: {
    flexShrink: 0,
  },
  location: {
    flexShrink: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#e9e9e9"
  },
  locationText: {
    fontSize: 16,
    color: "#000"
  },
});

export default Stores;
