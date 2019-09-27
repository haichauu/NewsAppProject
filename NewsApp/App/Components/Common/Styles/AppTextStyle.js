import {StyleSheet, Platform} from 'react-native';


const font = Platform.OS === 'ios' ? 'Arial' : 'Roboto' ;


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: font,
        color: 'white',
    }
})

export default styles