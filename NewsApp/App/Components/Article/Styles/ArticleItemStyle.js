import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c4dcdc',
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: {width: 5, height: 8},
        shadowRadius: 3,
        elevation: 6
    },
    imageBackground: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22
    
    },
    authorText: {
        fontSize: 13,
        paddingVertical: 5,
        color: 'black',
    },
    publishedAtText: {
        fontSize: 13,
        color: 'black',
        textAlign: 'right',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    descriptionText: {
        fontSize: 15,
        color: 'black',

    },
    descriptionStyle: {
        paddingVertical: 5,
    },
    infoWrapper: {
        padding: 10,
    }
})

export default styles