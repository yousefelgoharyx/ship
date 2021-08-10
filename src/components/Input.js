import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Input = ({ placeholder, iconLeft, iconRight, size, ...rest }) => {
  return (
    <View style={styles.inputWrapper}>
      {iconLeft ? (
        <MaterialIcons name={iconLeft} size={size} color="#999" />
      ) : null}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...rest}
        placeholderTextColor="#999"
      />
      {iconRight ? (
        <MaterialIcons
          name={iconRight}
          size={size}
          color="#999"
          style={{ marginLeft: 8 }}
        />
      ) : null}
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
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 56,
    fontFamily: "Cairo",
    flexGrow: 1,
    textAlign: 'right'
  },
});

export default Input;
