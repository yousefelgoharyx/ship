import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Spinner from "./Spinner";
import StyledText from "./StyledText";
const Button = ({ children, disabled,small,style,loading, ...rest }) => {
  let buttonStyles = [styles.button]
  let textStyles = {...styles.buttonText}
  if (small) {
    buttonStyles.push(styles.buttonSmall)
    textStyles = {...styles.buttonText, ...styles.buttonTextSmall}
  }
  if(style) buttonStyles.push(style)
  if (disabled) buttonStyles.push(styles.buttonDisabled)

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={0.7}
      disabled={disabled}
      {...rest}
    >
      <StyledText style={textStyles} weight="bold">
        {loading ? <Spinner /> : children}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#2B1253",
  },
  buttonSmall: {
    height: 48
  },
  buttonDisabled: {
    backgroundColor: "#2B125350",
  },
  buttonText: {
    color: "#fff",
  },
  buttonTextSmall: {
    fontSize: 12
  }
});
export default Button;
