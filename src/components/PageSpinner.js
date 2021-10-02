import React from 'react'
import { View } from 'react-native'
import Spinner from './Spinner'

const PageSpinner = () => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Spinner size={24} color="#000" />
        </View>
    )
}

export default PageSpinner
