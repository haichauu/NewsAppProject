import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const widthItem = (width-30)*0.5;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        width: widthItem ,
        height: widthItem,
        padding: 5,
        borderRadius: 10
      
        
    },

    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        height: widthItem*0.4
       
    },

    websiteText : {
        color: '#1e90ff',
        fontSize: 16,
    },

    nameText: {
        color: 'black',
        fontWeight: '600',
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
        color: 'red',
    },

    infoWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;