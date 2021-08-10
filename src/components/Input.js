import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({placeholder, ...rest}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...rest}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: "#ddd",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    height: 56,
    fontFamily: "Cairo",
  },
});

export default Input;
