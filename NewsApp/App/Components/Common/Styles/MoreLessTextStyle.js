import {StyleSheet} from 'react-native'
import {Colors, Font} from '../../../Themes/index'

const styles = StyleSheet.create({
    buttonText: {
        fontSize: Font.MEDIUM_SIZE,
        fontWeight: 'bold',
        color: Colors.PINKCOLOR,
        textShadowColor: Colors.SHADOWCOLOR,
        textShadowOffset: {width: 2, height: 2}, 
        textShadowRadius: 4,
    }
})

export default styles