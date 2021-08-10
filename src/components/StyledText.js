import React from 'react'
import { Text } from 'react-native';
function StyledText({ children, weight, style, ...rest }) {
  let fontFamily = "Cairo";
  if (weight === 700 || weight === "bold") fontFamily = "Cairo-Bold";
  return <Text style={{ ...style, fontFamily }} {...rest}>{children}</Text>;
}

export default StyledText;
