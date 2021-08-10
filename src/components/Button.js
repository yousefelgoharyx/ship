import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { LinearGradient } from "expo-linear-gradient";
const Button = ({ children, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <LinearGradient
        style={styles.button}
        colors={["#2B1253", "#2B1253"]}
        start={[1, 1]}
        end={[0.1, 0.1]}
      >
        <StyledText style={styles.buttonText} weight="bold">
          {children}
        </StyledText>
      </LinearGradient>
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
  },
  buttonText: {
    color: "#fff",
  },
});
export default Button;
