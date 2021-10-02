import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "./Spacer";

const Card = ({ name, city, address, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <View style={styles.info}>
        <StyledText style={styles.infoName} weight="bold">
          {name || "غير متاح"}
        </StyledText>
        <Spacer space={4} />
        <View style={styles.infoPortion}>
          <StyledText style={styles.infoText}>{city || "غير متاح"}</StyledText>
          <MaterialIcons name="place" color="#999" style={{ top: 6 }} />
        </View>
        <Spacer space={4} />

        <View style={styles.infoPortion}>
          <StyledText style={styles.infoText}>{address || "غير متاح"}</StyledText>
          <MaterialIcons name="place" color="#999" style={{ top: 6 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  info: {
    flexShrink: 1,
  },
  infoPortion: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexShrink: 1,
    justifyContent: "flex-end",
  },
  infoName: {
    textAlign: "right",
  },
  infoText: {
    color: "#999",
    marginRight: 8,
    textAlign: "right",
  },
  more: {
    marginRight: 32,
    alignSelf: "flex-start",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Card;
