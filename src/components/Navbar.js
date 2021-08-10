import React, { useRef, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import StyledText from "./StyledText";
import Input from "./Input";
import Spacer from "./Spacer";
const Option = ({ children }) => {
  return (
    <TouchableOpacity style={styles.option} activeOpacity={0.8}>
      <StyledText style={styles.optionText}>{children}</StyledText>
    </TouchableOpacity>
  );
};
const Navbar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.current}>
          <StyledText style={styles.currentPage}>{props.title}</StyledText>
          <TouchableOpacity activeOpacity={0.7} onPress={props.onOpenDrawer}>
            <MaterialIcons name="menu" color="#fff" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      {props.onSearch && (
        <>
          <View style={styles.search}>
            <Input
              placeholder="ابحث"
              iconLeft="search"
              size={24}
              onChangeText={props.onSearch}
            />
          </View>
          <Spacer />
        </>
      )}
      {props.options && (
        <>
          <ScrollView
            contentContainerStyle={styles.options}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {props.options.map((option) => {
              return (
                <>
                  <Option>{option}</Option>
                  <Spacer space={8} />
                </>
              );
            })}
          </ScrollView>
          <Spacer />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B1253",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  current: {
    flexDirection: "row",
    alignItems: "center",
  },
  currentPage: {
    color: "#fff",
    fontSize: 16,
    marginRight: 8,
  },
  search: {
    paddingHorizontal: 16,
  },
  options: {
    paddingHorizontal: 16,
    flexDirection: "row-reverse",
  },
  option: {
    backgroundColor: "#E97427",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    overflow: "hidden",
  },
  optionText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Navbar;
