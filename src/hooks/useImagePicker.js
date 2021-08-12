import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useEffect } from "react";
const useImagePicker = () => {
  useEffect(() => {
    async function req() {
      let status;
      let canAskAgain;
      while (status !== "granted" && canAskAgain) {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        status = result.status;
        canAskAgain = result.canAskAgain;
      }
    }
    req();
  }, []);
};

export default useImagePicker;
