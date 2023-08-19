import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import welcomeImage from '../../assets/welcomeImage.png'
import { BackgroundColor, AccentColor, SecondaryColor, PrimaryColor, PrimaryOpacityColor } from '../../Utils/Colors'

const Welcome = () =>
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

        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.textLoginButton}>
                LOGIN
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.textsignupButton}>
                SIGNUP
            </Text>
        </TouchableOpacity>
    </View>


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
    loginButton: {
        backgroundColor: PrimaryColor,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 6,
        shadowColor: '#52006A',
    },
    textLoginButton: {
        color: '#fff',
        fontSize: 24,
        marginVertical: 22
    },
    signupButton: {
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: PrimaryColor,
        elevation: 6,
        shadowColor: '#52006A',
    },
    textsignupButton: {
        color: '#000',
        fontSize: 24,
        marginVertical: 22
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