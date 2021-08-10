import {
  useFonts,
  Cairo_400Regular,
  Cairo_700Bold,
} from "@expo-google-fonts/cairo";

const useFont = () => {
  let [fontsLoaded] = useFonts({
    'Cairo': Cairo_400Regular,
    'Cairo-Bold': Cairo_700Bold,
  });

  return fontsLoaded
};
export default useFont;
