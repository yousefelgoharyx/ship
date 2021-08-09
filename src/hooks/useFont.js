import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Cairo_400Regular, Cairo_700Bold } from '@expo-google-fonts/cairo';

const useFont = () => {
    let [fontsLoaded] = useFonts({
        Cairo_400Regular,
        Cairo_700Bold
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    }
export default useFont
