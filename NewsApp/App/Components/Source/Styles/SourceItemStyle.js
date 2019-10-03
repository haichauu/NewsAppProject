import { StyleSheet, Platform } from 'react-native';
import {Font, Colors, Metrics} from '../../../Themes'

const widthItem = (Metrics.WINDOW_WIDTH - 30) * 0.5;



const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.PRIMARYCOLOR,
        width: widthItem,
        height: widthItem,
        padding: Metrics.PADDING_LV1,
        borderRadius: 10,
        shadowColor: Colors.SHADOWCOLOR,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 2,
        elevation: Platform.OS === 'ios' ? 2 : 0,
    },

    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: widthItem * 0.35

    },

    iconContainer: {
        backgroundColor: Colors.WHITECOLOR,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12.5
    },

    nameText: {
        color: Colors.PINKCOLOR,
        textShadowColor: Colors.SHADOWCOLOR,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        fontWeight: 'bold',
        fontSize: Font.LX_SIZE,
        textAlign: "center"
    },

    descriptionText: {
        color: Colors.DARKCOLOR,
        fontSize: Font.MEDIUM_SIZE

    },

    categotyText: {
        color: Colors.WHITECOLOR,
        fontSize: Font.MEDIUM_SIZE
    },

    infoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;