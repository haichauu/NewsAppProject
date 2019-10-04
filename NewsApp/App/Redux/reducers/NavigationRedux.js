import AppNavigation from '../../Navigation/AppNavigation'

const NavigationRedux = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state)
    return newState, state
}

export default NavigationRedux