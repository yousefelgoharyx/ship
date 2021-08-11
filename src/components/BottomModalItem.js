import React from "react";
import { TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
const BottomModalItem = ({ children, ...rest }) => {
  return (
    <TouchableOpacity
      style={{ padding: 24, backgroundColor: "#fff", textAlign: "right" }}
      {...rest}
    >
      <StyledText>{children}</StyledText>
    </TouchableOpacity>
  );
};

export default BottomModalItem;
