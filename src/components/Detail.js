import React from 'react'
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import StyledText from "./StyledText";

const Detail = (props) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.head}>{props.head}</StyledText>
      <Spacer space={2} />
      <StyledText style={styles.subhead} weight={700}>
        {props.subhead}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  head: {
    color: "#999",
    fontSize: 12,
    textAlign: 'right'
},
subhead: {
    color: "#000",
    fontSize: 12,
    textAlign: 'right'
  },
});

export default Detail;
