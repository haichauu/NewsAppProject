import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffcccb',
    },
    imageBackground: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },
    titleText: {
        fontWeight: 'bold',
        color: 'black'
    },
    authorText: {
        fontSize: 15,
        paddingVertical: 5,
        color: 'black'

    },
    publishedAtText: {
        fontSize: 13,
        color: 'black'
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