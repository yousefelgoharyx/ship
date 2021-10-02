import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, View } from "react-native"
import StyledText from "./StyledText";
import Button from './Button'
import Spacer from "./Spacer";
const Error = (props) => {
    return (
        <View style={styles.container}>
            <MaterialIcons size={32} name="sentiment-very-dissatisfied" />
            <StyledText style={styles.head} weight="bold">حدث خطا ما</StyledText>
            <StyledText>يمكن ان يكون خطأ من الشبكة او من السيرفر</StyledText>
            <Spacer space={16} />
            <Button onPress={props.retry}>حاول مرة اخري</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 32,
        elevation: 1,
        borderRadius: 4
    },
    head: {
        fontSize: 24
    }
})

export default Error
