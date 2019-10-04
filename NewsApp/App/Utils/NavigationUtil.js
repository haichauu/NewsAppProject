import {NavigationActions} from 'react-navigation'
import {store} from '../Redux/store'


export function navigate (screenName, params)  {
    store.dispatch(NavigationActions.navigate({
        routeName: screenName,
        params: params
    })) 
}

export function goBack () {
    store.dispatch(NavigationActions.back())
}