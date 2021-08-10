import React from 'react'
import { Text } from 'react-native';
function StyledText({ children, weight, style }) {
  let fontFamily = "Cairo";
  if (weight === 700 || weight === "bold") fontFamily = "Cairo-Bold";
  return <Text style={{ ...style, fontFamily }}>{children}</Text>;
}

export default StyledText;
