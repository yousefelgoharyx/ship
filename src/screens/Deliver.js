import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Spacer from "../components/Spacer";
import StyledText from "../components/StyledText";
import * as ImagePicker from "expo-image-picker";
import { Page, PageWrapper } from "../components/Page";
import useTakePicture from "../hooks/useTakePicture";
import useImagePicker from "../hooks/useImagePicker";

const CameraButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.cameraButton}>
      <StyledText>التقاط صورة</StyledText>
    </View>
  </TouchableOpacity>
);

const Deliver = ({ navigation }) => {
  useImagePicker();
  const barcode = useTakePicture();
  const id = useTakePicture();
  let barcodeImg = null;
  let idImg = null;
  if (barcode.image)
    barcodeImg = (
      <Image source={{ uri: barcode.image }} style={styles.cameraImage} />
    );
  if (id.image)
    idImg = <Image source={{ uri: id.image }} style={styles.cameraImage} />;
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="تسليم شحنة" />

      <PageWrapper hasPadding>

        <Input placeholder="رقم الشحنة" />
        <Spacer />
        {barcodeImg}
        <Spacer />
        <StyledText weight="bold">صورة الباركود</StyledText>
        <CameraButton onPress={barcode.launchCamera} />
        <Spacer space={8} />
        <Spacer />
        {idImg}
        <Spacer />
        <StyledText weight="bold">صورة بطاقة المستلم</StyledText>
        <Spacer space={8} />
        <CameraButton onPress={id.launchCamera} />
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
