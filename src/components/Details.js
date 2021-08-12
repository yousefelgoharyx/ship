import React from 'react'
import { View, StyleSheet } from 'react-native'

const Details = ({children}) => {
    return (
        <View style={styles.details}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    details: {
      backgroundColor: "#fff",
      padding: 8,
      borderRadius: 8,
      borderColor: "#ddd",
      borderWidth: 1,
    },
  });
  

export default Details
