import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import SplashContainer from '../Containers/SplashContainer';
import SourceContainer from '../Containers/SourceContainer';
import ArticleContainer from '../Containers/ArticleContainer';
import DetailContainer from '../Containers/DetailContainer';

const mainNav = createStackNavigator(
    {
        SplashScreen: { screen: SplashContainer, navigationOptions: () => ({ header: null }) },
        SourceScreen: { screen: SourceContainer, navigationOptions: () => ({ headerLeft: null }) },
        ArticleScreen: { screen: ArticleContainer },
        DetailScreen: { screen: DetailContainer },
    },
    {

        headerBackTitleVisible: false,
        defaultNavigationOptions: ({ navigation }) => ({
            title: titleName(navigation.state.routeName),
        }),
        initialRouteName: 'SplashScreen',
    }

)

const titleName = (routeName) => {
    let titleName = null
    switch (routeName) {
        case 'SourceScreen':
            titleName = 'Source'
            break;
        case 'ArticleScreen':
            titleName = 'Article'
            break;
        case 'DetailScreen':
            titleName = 'Detail'
            break;
        default:
            break;
    }
    return titleName
}

export default createAppContainer(mainNav);





