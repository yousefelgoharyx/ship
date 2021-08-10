import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import StyledText from "../components/StyledText";
import Spacer from "../components/Spacer";

const Notis = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="الاشعارات" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.noti}>
          <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
            <MaterialIcons name="notifications" color="#000" size={24} />
            <Spacer space={4} />
            <StyledText style={styles.head} weight="bold">
              ادارة الشركة
            </StyledText>
          </View>
          <Spacer space={4} />
          <StyledText style={styles.subhead}>
            كسم اللي يشغلك بفلوس والله
          </StyledText>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  wrapper: {
    padding: 16,
  },
  noti: {
    backgroundColor: "#fff",
    padding: 16,
    elevation: 1,
    borderRadius: 8,
    alignItems: "flex-end",
  },
  head: {
    fontSize: 16,
  },
  subhead: {
    fontSize: 14,
  },
});

export default Notis;
