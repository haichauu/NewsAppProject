import {NavigationActions} from 'react-navigation'

export function navigate (screenNames, params) {
    (NavigationActions.navigate({
        screenNames, params
    }))
}

export function goBack () {
    NavigationActions.goBack()
}