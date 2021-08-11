import React from "react";
import { Modal, Pressable } from "react-native";
const BottomModal = (props) => {
  return (
    <>
      <Modal
        animationType="fade"
        visible={props.visible}
        onRequestClose={props.onRequestClose}
        transparent
        statusBarTranslucent
      >
        <Pressable
          style={{ height: "100%", backgroundColor: "#00000050" }}
        ></Pressable>
      </Modal>
      <Modal
        animationType="slide"
        visible={props.visible}
        onRequestClose={props.onRequestClose}
        transparent
        statusBarTranslucent
      >
        <Pressable
          onPress={props.onRequestClose}
          style={{
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          {props.children}
        </Pressable>
      </Modal>
    </>
  );
};

export default BottomModal;
