import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Navbar from "../components/Navbar";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Input from "../components/Input";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import { Page, PageWrapper } from "../components/Page";
const ProfilePicChanger = (props) => {
  return (
    <View style={styles.profilePic}>
      <View>
        <Image
          source={{
            uri: props.image,
          }}
          style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
        />
        <Pressable style={styles.profilePicOverlay} onPress={props.onPress}>
          <MaterialIcons name="camera-alt" color="#fff" size={32} />
        </Pressable>
      </View>
    </View>
  );
};
const Settings = ({ navigation }) => {
  const [image, setimage] = useState(null);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      setimage(result.uri);
    }
  };
  return (
    <Page>
      <Navbar onOpenDrawer={() => navigation.openDrawer()} title="الاعدادات" />
      <PageWrapper>
        <ProfilePicChanger
          image={
            image
              ? image
              : "http://thebodyisnotanapology.com/wp-content/uploads/2018/02/pexels-photo-459947.jpg"
          }
          onPress={pickImage}
        />
        <Spacer />
        <Input placeholder="الاسم" />
        <Spacer />
        <Input placeholder="البريد الالكتروني" />
        <Spacer />
        <Input placeholder="رقم الهاتف" />
        <Spacer />
        <Input placeholder="كلمة المرور" />
        <Spacer />
        <Input placeholder="تاكيد كلمة المرور" />
        <Spacer />
        <Button>حفظ</Button>
      </PageWrapper>
    </Page>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    alignItems: "center",
    overflow: "hidden",
  },

  profilePicOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    backgroundColor: "#00000050",
    borderRadius: 150 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
