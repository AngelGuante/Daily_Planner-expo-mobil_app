import { useState } from "react"
import { TextInput, StyleSheet } from "react-native"
import { BackgroundColor, AccentColor, SecondaryColor, PrimaryOpacityColor, PrimaryColor } from '../../Utils/Colors'
import { Iconify } from 'react-native-iconify'

const InputOneLine = function (props) {
    props = props['props']

    if (props['inputMode'] === 'password')
        return (
            <TextInput placeholder={props['placeholder']}
                secureTextEntry={true}
                style={styles.input}
            />
        )
    else
        return (
            <TextInput placeholder={props['placeholder']}
                inputMode={props['inputMode']}
                style={styles.input}
            />
        )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: '100%',
        borderBottomColor: PrimaryColor
    },
})

export default InputOneLine