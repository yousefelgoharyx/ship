import React from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import Button from "../components/Button";

const Ticket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar
        onOpenDrawer={() => navigation.openDrawer()}
        title="تذاكر الدعم"
      />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Input placeholder="عنوان التذكرة" />
        <Spacer />
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="اكتب شيئا"
            placeholderTextColor="grey"
            multiline={true}
            numberOfLines={20}
          />
        <Spacer />
        <Button>ارسال</Button>
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

  textArea: {
    fontFamily: 'Cairo',
    textAlign: 'right',
    backgroundColor: "#fff",
    textAlignVertical: 'top',
    padding: 16,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    lineHeight: 1.2,
    height: 300
  },
});

export default Ticket;
