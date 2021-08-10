import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import * as ImagePicker from "expo-image-picker";

const Deliver = ({ navigation }) => {
  const [barcode, setBarcode] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const takeBarcode = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setBarcode(result.uri);
    }
  };

  const takeId = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setId(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="تسليم شحنة" />

      <ScrollView contentContainerStyle={styles.formWrapper}>
        <Input placeholder="رقم الشحنة" />
        <Spacer />

        {barcode && (
          <Image
            source={{ uri: barcode }}
            style={{ width: "100%", height: 250, borderRadius: 16 }}
          />
        )}
        <Spacer />
        <StyledText weight="bold">صورة الباركود</StyledText>
        <Spacer space={8} />
        <TouchableOpacity onPress={takeBarcode}>
          <View style={styles.cameraButton}>
            <StyledText>التقاط صورة</StyledText>
          </View>
        </TouchableOpacity>
        <Spacer />
        {id && (
          <Image
            source={{ uri: id }}
            style={{ width: "100%", height: 250, borderRadius: 16 }}
          />
        )}
        <Spacer />
        <StyledText weight="bold">صورة بطاقة المستلم</StyledText>
        <Spacer space={8} />
        <TouchableOpacity onPress={takeId}>
          <View style={styles.cameraButton}>
            <StyledText>التقاط صورة</StyledText>
          </View>
        </TouchableOpacity>
        <Spacer />
        <Button>تأكيد</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    direction: "rtl",
  },
  formWrapper: {
    padding: 16,
  },
  cameraButton: {
    textAlign: "center",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 56 / 8,
  },
});

export default Deliver;
