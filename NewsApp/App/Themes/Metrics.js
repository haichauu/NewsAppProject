import {Dimensions} from 'react-native'


const {width, height} = Dimensions.get('window')

const margin = 5
const padding = 5

const metrics = {
    icon: {
        tiny: 8,
        small: 12,
        medium: 16,
        large: 20,
        lxx: 65
    },

    WINDOW_WIDTH: width,
    WINDOW_HEIGHT: height,

    PADDING_LV1: padding,
    PADDING_LV2: padding*2,

    MARGIN_LV1: margin,
    MARGIN_LV2: margin*2,
    MARGIN_LV3: margin*3
}

export default metrics