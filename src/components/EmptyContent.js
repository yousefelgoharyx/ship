import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";
const EmptyContent = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        minHeight: 150
      }}
    >
      <View style={{}}>
        <StyledText weight="bold">لا يوجد شيئا</StyledText>
      </View>
    </View>
  );
};

export default EmptyContent;
