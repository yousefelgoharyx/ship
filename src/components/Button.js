import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const Button = ({children}) => {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <StyledText style={styles.buttonText} weight="bold">{children}</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff3333",
        width: "100%",
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        color: "#fff"
    }
})
export default Button
