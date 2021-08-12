import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import * as ImagePicker from "expo-image-picker";
import { Page, PageWrapper } from "../components/Page";

const CameraButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.cameraButton}>
      <StyledText>التقاط صورة</StyledText>
    </View>
  </TouchableOpacity>
);

const cameraSettings = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
};

const Deliver = ({ navigation }) => {
  const [barcode, setBarcode] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    async function req() {
      let status;
      let canAskAgain;
      while (status !== "granted" && canAskAgain) {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        status = result.status;
        canAskAgain = result.canAskAgain;
      }
    }
    req();
  }, []);
  const takeBarcode = async () => {
    const s = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (s.granted) {
      let result = await ImagePicker.launchCameraAsync(cameraSettings);
      if (!result.cancelled) setBarcode(result.uri);
    } else {
      alert("Allow the application to access the media");
    }
  };

  const takeId = async () => {
    const s = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (s.granted) {
      let result = await ImagePicker.launchCameraAsync(cameraSettings);
      if (!result.cancelled) setId(result.uri);
    } else {
      alert("Allow the application to access the media");
    }
  };

  let barcodeImage = null;
  let idImage = null;
  if (barcode)
    barcodeImage = (
      <Image source={{ uri: barcode }} style={styles.cameraImage} />
    );
  if (id) idImage = <Image source={{ uri: id }} style={styles.cameraImage} />;
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="تسليم شحنة" />

      <PageWrapper>
        <Input placeholder="رقم الشحنة" />
        <Spacer />
        {barcodeImage}
        <Spacer />
        <StyledText weight="bold">صورة الباركود</StyledText>
        <CameraButton onPress={takeBarcode} />
        <Spacer space={8} />
        <Spacer />
        {idImage}
        <Spacer />
        <StyledText weight="bold">صورة بطاقة المستلم</StyledText>
        <Spacer space={8} />
        <CameraButton onPress={takeId} />
        <Spacer />
        <Button>تأكيد</Button>
      </PageWrapper>
    </Page>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    textAlign: "center",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 56 / 8,
  },
  cameraImage: {
    width: "100%",
    height: 250,
    borderRadius: 16,
  },
});

export default Deliver;
