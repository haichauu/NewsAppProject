import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import styles from './Styles/MoreLessTextStyle';


export default class MoreLessText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
            showButton: false,
            numberOfLinesAtStart: null,
            originalHeight: 0,
        };
    }


    onLayout = (event) => {
        const { originalHeight } = this.state
        const { height } = event.nativeEvent.layout
        //console.log(height)
        if (this.props.numberOfLines) {
            if (!this.state.numberOfLinesAtStart) {
                this.setState({
                    numberOfLinesAtStart: this.props.numberOfLines,
                    originalHeight: height
                })
            }
            if (originalHeight > height) {
                 console.log(originalHeight)
                this.setState({ showButton: true })
            }
        }
    }

    onPressMoreLess = () => {
        this.setState({ isExpand: !this.state.isExpand })
    }


    render() {

        const { children, text, style, textStyle } = this.props
        const { isExpand, numberOfLinesAtStart } = this.state
        console.log(this.state.numberOfLinesAtStart)
        let itemProps = {
            style: textStyle,
            text: children ? children : text,
            numberOfLines: isExpand ? null : numberOfLinesAtStart
        }

        return (
            <View style={style} onLayout={(event) => this.onLayout(event)}>
                <AppText {...itemProps} />
                {this.state.showButton &&
                    <TouchableOpacity onPress={() => this.onPressMoreLess()}>
                        <AppText style={styles.buttonText}>{isExpand ? 'Less' : 'More'}</AppText>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}


