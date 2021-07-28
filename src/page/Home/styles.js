import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 27,
        textAlign: 'center',
        color: colors.heading,
    },
    imageIcon: {
        width: Dimensions.get('window').width * 0.12,
        transform: [{rotate: '-30deg'}]
    },
    line: {
        borderBottomColor: '#888',
        borderWidth: 0.5,
    },
    list: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default styles