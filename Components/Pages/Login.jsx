import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { BackgroundColor, AccentColor, SecondaryColor, PrimaryOpacityColor, PrimaryColor } from '../../Utils/Colors'
import { Iconify } from 'react-native-iconify'

const signup = function (props) {
    props = props['props']

    return (
        <View style={styles.container}>
            <View style={styles.designUp}>
            </View>

            <TouchableOpacity style={styles.backArrow}
                onPress={() => (props['setActualPage'])('welcome')}>
                <Iconify icon="fluent-mdl2:back"
                    style={styles.backArrowText} />
            </TouchableOpacity>

            <Text style={styles.pageName}>Login</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    designUp: {
        borderRadius: 260 / 2,
        backgroundColor: PrimaryOpacityColor,
        height: 260,
        width: 260,
        position: 'absolute',
        top: -80,
        right: -60
    },
    backArrow: {
        position: 'absolute',
        top: 54,
        left: 22
    },
    backArrowText: {
        color: PrimaryColor,
    },
    pageName: {
        position: 'absolute',
        top: 54,
        right: 22,
        fontSize: 24,
        color: AccentColor
    },

})

export default signup