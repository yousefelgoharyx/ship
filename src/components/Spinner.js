import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { View, Animated } from "react-native";

const Spinner = ({color = "#ffffff", size = 24}) => {
  const spinningAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinningAnimation, {
        useNativeDriver: true,
        toValue: 360,
      })
    ).start();
  }, []);
  return (
    <View>
      <View
        style={{
          width: size,
          height: size,
          borderLeftColor: "#00000000",
          borderTopColor: "#00000000",
          borderBottomColor: "#00000000",
          borderRightColor: "#00000000",
          borderWidth: 3,
          borderRadius: size / 2,
        }}
      ></View>
      <Animated.View
        style={{
          width: size,
          height: size,
          borderLeftColor: color,
          borderTopColor: color,
          borderBottomColor: color,
          borderRightColor: "#ffffff00",
          borderWidth: 3,
          borderRadius: size / 2,
          position: "absolute",
          top: 0,
          left: 0,
          transform: [
            {
              rotateZ: spinningAnimation.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      ></Animated.View>
    </View>
  );
};

export default Spinner;
