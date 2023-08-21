import { Text, TouchableOpacity } from 'react-native'
import { PrimaryColor } from '../../Utils/Colors'

const RectangleAction = function (props) {
    props = props['props']
console.log(props)
    switch (props['type']) {
        case 'filled':
            return (
                <TouchableOpacity onPress={() => (props['click'])('ss')}
                    style={[styles.buttonFilled,
                    {
                        marginBottom: props['marginBotton'] ? props['marginBotton'] : 0
                    }]}>
                    <Text style={styles.textButtonFilled}>
                        {props['text']}
                        {props['icon'] && props['icon']}
                    </Text>
                </TouchableOpacity>
            )
        case 'unfilled':
            return (
                <TouchableOpacity style={styles.buttonUnFilled}>
                    <Text style={styles.textButtonUnFilled}>
                        {props['text']}
                        {props['icon'] && props['icon']}
                    </Text>
                </TouchableOpacity>
            )
    }
}

const styles = {
    buttonFilled: {
        backgroundColor: PrimaryColor,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 6,
        shadowColor: '#52006A',
    },
    textButtonFilled: {
        color: '#fff',
        fontSize: 24,
        marginVertical: 12
    },
    buttonUnFilled: {
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: PrimaryColor,
        elevation: 6,
        shadowColor: '#52006A'
    },
    textButtonUnFilled: {
        color: '#000',
        fontSize: 24,
        marginVertical: 12
    }
}

export default RectangleAction