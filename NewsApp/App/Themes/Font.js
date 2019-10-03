import {Platform} from 'react-native'


const font = {
    PRIMARY_FONT: Platform.OS === 'ios' ? 'Arial' : 'Roboto',

    SMALL_SIZE: 13,
    MEDIUM_SIZE: 16,
    LARGE_SIZE: 19,
    LX_SIZE: 22
}

export default font