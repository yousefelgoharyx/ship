import React from "react";
import { View } from "react-native";

const Spacer = ({ space }) => {
  return (
    <View style={{ height: space || 16, backgroundColor: "transparent" }}></View>
  );
};

export default Spacer;
