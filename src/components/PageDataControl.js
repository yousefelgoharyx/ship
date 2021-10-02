import React from "react"
import { RefreshControl, ScrollView } from "react-native"
const PageDataControl = (props) => {
    return (
        <ScrollView contentContainerStyle={{flex: 1, padding: 16}} refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }>
            {props.children}
        </ScrollView>
    )
}

export default PageDataControl
