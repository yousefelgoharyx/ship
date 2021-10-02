import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const cameraSettings = {
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
};
const useImagePicker = () => {
  const [image, setimage] = useState(null);
  const launchCamera = async () => {
    const s = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (s.granted) {
      let result = await ImagePicker.launchImageLibraryAsync(cameraSettings);
      if (!result.cancelled) setimage(result.uri);
    } else {
      alert("Allow the application to access the media");
    }
  };

  return {
    launchCamera,
    image,
  };
};

export default useImagePicker;
