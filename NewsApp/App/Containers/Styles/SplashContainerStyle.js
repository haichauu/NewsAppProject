import {StyleSheet, Platform} from 'react-native';


const font = Platform.OS === 'ios' ? 'Arial' : 'Roboto' ;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4d3d3'
    },
    title: {
        fontSize: 50,
        fontFamily: font,
        color: 'white',
        fontWeight: 'bold'
    }

})

export default styles