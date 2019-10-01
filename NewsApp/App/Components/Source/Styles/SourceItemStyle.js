import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const widthItem = (width-30)*0.5;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b4d3d3',
        width: widthItem ,
        height: widthItem,
        padding: 5,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOffset: {width: 5, height: 8},
        shadowRadius: 3,
        elevation: 6
    },

    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: widthItem*0.35
       
    },

    websiteText : {
        color: '#b76e79',
        fontSize: 16,
        textShadowColor:'rgba(255, 255, 255, 0.3)',
        textShadowOffset: {width: 2, height: 2}, 
        textShadowRadius: 4,
    },

    iconContainer: {
        backgroundColor: 'white', 
        width: 25, 
        height: 25, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 12.5
    },

    nameText: {
        color: '#bf7f89',
        textShadowColor:'rgba(255, 255, 255, 0.3)',
        textShadowOffset: {width: 2, height: 2}, 
        textShadowRadius: 4,
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: "center"

    },

    descriptionText: {
        color: 'black',
        fontSize: 14

    },

    category: {

    },
    categotyText: {
        color: '#ffffff',
    },

    infoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;