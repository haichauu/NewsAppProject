import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import Screens
import SplashContainer from '../Containers/SplashContainer';
import SourceContainer from '../Containers/SourceContainer';
import ArticleContainer from '../Containers/ArticleContainer';
import DetailContainer from '../Containers/DetailContainer';

const mainNav = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashContainer, navigationOptions: () => ({
                header: null,
            })
        },
        SourceScreen: { screen: SourceContainer },
        ArticleScreen: { screen: ArticleContainer },
        DetailScreen: { screen: DetailContainer },
    },
    {
        headerBackTitleVisible: false,
        defaultNavigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName
        }),
        initialRouteName: 'SplashScreen',

    }

)

export default createAppContainer(mainNav);





