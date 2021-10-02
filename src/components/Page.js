import React from 'react'
import { StyleSheet, View } from 'react-native'

const Page = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}


const PageWrapper = (props) => {
    const propStyles = {
        padding: props.hasPadding ? 16 : 0
    }
    return (
        <View style={[styles.wrapper, propStyles]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    wrapper: {
        flex: 1,
    }
})

export {Page, PageWrapper}
