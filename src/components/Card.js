import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "./Spacer";
const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <StyledText style={styles.infoName} weight="bold">يوسف مجدي</StyledText>
        <Spacer space={4} />
        <View style={styles.infoPortion}>
          <StyledText style={styles.infoText}>الاسكندرية</StyledText>
          <MaterialIcons name="place" color="#999" style={{top: 6}} />
        </View>
        <Spacer space={4} />

        <View style={styles.infoPortion}>
          <StyledText style={styles.infoText}>
            نادي الصيد محرم بيك شارع الاخلاص عمارة ابو رضا الدور الاول
          </StyledText>
          <MaterialIcons name="place" color="#999" style={{top: 6}} />
        </View>
      </View>

      <TouchableOpacity style={styles.more}>
        <MaterialIcons name="more-horiz" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
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
    textAlign: 'right',
  },
  infoText: {
    color: "#999",
    marginRight: 8,
    textAlign: 'right'
  },
  more: {
      marginRight: 32,
      alignSelf: 'flex-start',
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
export default Card;
