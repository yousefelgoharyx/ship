import React from "react";
import { View } from "react-native";
import Spinner from "./Spinner";
import StyledText from "./StyledText";
const DataFetch = (props) => {
  let content = <Spinner color="#000000" size={24} />;
  console.log(props.handler)
  if (props.handler.error) {
    content = (
      <View>
        <StyledText>هناك خطا ما</StyledText>
      </View>
    );
  }
  if (!props.handler.loading && !props.handler.error) {
    content = props.children;
  }

  return <>{content}</>;
};

export default DataFetch;
