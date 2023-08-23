import { StyleSheet, View, Text, Image } from 'react-native'
import welcomeImage from '../../assets/welcomeImage.png'
import { BackgroundColor, AccentColor, SecondaryColor, PrimaryOpacityColor } from '../../Utils/Colors'
import RectangleAction from '../Buttons/RectangleAction'
import { Iconify } from 'react-native-iconify'

const Welcome = function (props) {
    props = props['props']

    return (
        <View style={styles.container}>
            <View style={styles.designUp}>
            </View>
            <View style={styles.designDown}>
            </View>

            <Text style={styles.grettingsTitle}>Hey there!</Text>

            <Text style={styles.grettingsMessage}>
                Here you can organize your daily tasks,
                Never forget a task again! Create recurring tasks,
                Track their progress Set medicament alert, and much more.
                Lets Start!
            </Text>

            <Image
                source={welcomeImage}
                style={styles.welcomeImage} />

            <RectangleAction props={{
                type: 'filled',
                text: 'LOGIN',
                marginBotton: 20,
                icon: <Iconify icon="solar:login-broken" />,
                click: {
                    method: props['setActualPage'],
                    params: 'login'
                },
            }} />

            <RectangleAction props={{
                type: 'unfilled',
                text: 'SIGNUP',
                icon: <Iconify icon="carbon:new-tab" />,
                click: {
                    method: props['setActualPage'],
                    params: 'signup'
                },
            }} />
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
    welcomeImage: {
        width: 360,
        height: 360,
    },
    grettingsTitle: {
        fontSize: 32,
        color: AccentColor
    },
    grettingsMessage: {
        fontSize: 18,
        color: SecondaryColor,
        textAlign: 'justify'
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
    designDown: {
        borderRadius: 260 / 2,
        backgroundColor: PrimaryOpacityColor,
        height: 260,
        width: 260,
        position: 'absolute',
        bottom: -140,
        left: -60
    }
})

export default Welcome