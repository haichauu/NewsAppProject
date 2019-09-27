import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AppFlatList from '../Components/Common/AppFlatList';
import styles from './Styles/ArticleContainerStyle'


export default class ArticleContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articleList: [
                {
                    author: "Nilay Patel, Chris Welch",
                    title: "Packers vs Eagles: inside the first-ever NFL broadcast in 4K HDR",
                    description: "Fox Sports is distributing Thursday Night Football in 4K HDR for the rest of the season, which means September 26th’s matchup between the Green Bay Packers and the Philadelphia Eagles marks the first time an NFL game will be delivered in ultra high definition.",
                    url: "https://www.theverge.com/2019/9/26/20884246/nfl-4k-hdr-broadcast-first-ever-fox-sports-thursday-night-football-streaming",
                    urlToImage: "https://cdn.vox-cdn.com/thumbor/ZPGSIQMqXK54M9TeroDxuNwzueE=/0x199:5472x3064/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19234450/1168690631.jpg.jpg",
                    publishedAt: "2019-09-26T16:13:52Z"
                },
                {
                    author: "Nilay Patel, Chris Welch",
                    title: "Packers vs Eagles: inside the first-ever NFL broadcast in 4K HDR",
                    description: "Honestly, it’s a better phone than the OnePlus 7 Pro.",
                    url: "https://www.theverge.com/2019/9/26/20884246/nfl-4k-hdr-broadcast-first-ever-fox-sports-thursday-night-football-streaming",
                    urlToImage:  "https://cdn.vox-cdn.com/thumbor/q5awHJb1IFGYU4uM6xZnR6V59lM=/0x248:2040x1316/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10228141/jbareham_180213_2301_0099.jpg",
                    publishedAt: "2019-09-26T16:13:52Z"
                },
                {
                    author: "Nilay Patel, Chris Welch",
                    title: "Packers vs Eagles: inside the first-ever NFL broadcast in 4K HDR",
                    description: "Fox Sports is distributing Thursday Night Football in 4K HDR for the rest of the season, which means September 26th’s matchup between the Green Bay Packers and the Philadelphia Eagles marks the first time an NFL game will be delivered in ultra high definition.",
                    url: "https://www.theverge.com/2019/9/26/20884246/nfl-4k-hdr-broadcast-first-ever-fox-sports-thursday-night-football-streaming",
                    urlToImage: "https://cdn.vox-cdn.com/thumbor/WEUgxt89u9UVgYjfYPgmwr3aNvc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19225721/akrales_120127_3681_0006.jpg",
                    publishedAt: "2019-09-26T16:13:52Z"
                },
                {
                    author: "Nilay Patel, Chris Welch",
                    title: "Packers vs Eagles: inside the first-ever NFL broadcast in 4K HDR",
                    description: "Honestly, it’s a better phone than the OnePlus 7 Pro.",
                    url: "https://www.theverge.com/2019/9/26/20884246/nfl-4k-hdr-broadcast-first-ever-fox-sports-thursday-night-football-streaming",
                    urlToImage:  "https://cdn.vox-cdn.com/thumbor/dEwDDD9VDLj5DNGVpczjvppliv8=/0x180:2500x1489/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/4294227/stock-samsung-gear-vr-old-0181.0.jpg",
                    publishedAt: "2019-09-26T16:13:52Z"
                },
            ]
        }
    }

    render() {

        const {articleList} = this.state
        const flatListProps = {
            articleData: articleList,
            
        }
        return (
            <View style={styles.container}>
                <AppFlatList {...flatListProps} />
                <Button title='Move to Detail Container' onPress={() => { this.props.navigation.navigate('DetailScreen') }} />
                <Button title='Go Back' onPress={() => { this.props.navigation.goBack() }} />
            </View>
        )
    }
}
