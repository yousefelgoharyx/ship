import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

const Page = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}


const PageWrapper = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    wrapper: {
        padding: 16
    }
})

export {Page, PageWrapper}
