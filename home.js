import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Feather';
import {
    Text,
    View,
    StyleSheet,
    ViewPagerAndroid,
} from 'react-native';
import FirstTab from './src/tabs/FirstTab.js';
import SecondTab from './src/tabs/SecondTab.js';
import ThirdTab from './src/tabs/ThirdTab.js';
import ForthTab from './src/tabs/ForthTab.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
    }
    updateTab(n) {
        this.refs['slider'].setPage(n);
        this.setState({ tab: n });
    }
    static navigationOptions = {
        header: null
    }
    static defaultProps={
        feedIcon:'life-buoy',
        chatIcon:'message-square',
        notifyIcon:'bell',
        userIcon:'user'
    }
    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid style={styles.bodyTab}
                    ref='slider'>
                    <View><FirstTab /></View>
                    <View><SecondTab /></View>
                    <View><ThirdTab /></View>
                    <View><ForthTab /></View>
                </ViewPagerAndroid>
                <View style={styles.renderTab}>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(0)}>
                        <Ionicons name={this.props.feedIcon} size={28} color={'#1E90FF'}/>
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(1)}>
                       <Ionicons name={this.props.chatIcon} size={28} color={'#1E90FF'}/>
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(2)}>
                        <Ionicons name={this.props.notifyIcon} size={28} color={'#1E90FF'}/>
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(3)}>
                       <Ionicons name={this.props.userIcon} size={28}color={'#1E90FF'} />
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    bodyTab: {
        flex: 10,
        width: '100%'
    },
    renderTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F0F8FF',
        width: '100%',
    },
    renderTabItems: {
        flex: 1,
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})