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
        alignItems: "center"
       
    },

    websiteText : {
    },

    nameText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 25,
        textAlign: "center"

    },

    descriptionText: {
        color: 'black',
        fontSize: 14

    },

    category: {

    },

    infoWrapper: {
    }
})

export default styles;