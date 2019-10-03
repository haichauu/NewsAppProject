import {StyleSheet, Platform} from 'react-native'
import {Font, Colors, Metrics} from '../../../Themes'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.SECONDARYCOLOR,
        borderRadius: 10,
        shadowColor: Colors.SHADOWCOLOR,
        shadowOffset: {width: 5, height: 8},
        shadowRadius: 3,
        elevation: Platform.OS === 'ios' ? 6 : 0
    },
    imageBackground: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: Font.LX_SIZE,
        color: Colors.WHITECOLOR
    },
    authorText: {
        paddingVertical: Metrics.PADDING_LV1,
        color: Colors.DARKCOLOR,
        fontWeight: 'bold'
    },
    publishedAtText: {
        textAlign: 'right',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    descriptionText: {
        fontSize: Font.MEDIUM_SIZE,
    },
    descriptionStyle: {
        paddingVertical: Metrics.PADDING_LV1,
    },
    infoWrapper: {
        padding: Metrics.PADDING_LV2,
    }
})

export default styles