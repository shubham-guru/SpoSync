import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView
} from 'react-native';
import { Image, Avatar } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/Feather'
import {Constants} from 'expo';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } =Dimensions.get('window');
export default class FirstTab extends Component {
    constructor(props){
        super(props);
        this.state={
            user1:'Shubham Guru',
            user2:'Digvijay Kumar',
            user3:'Ravi Chaudhary'
        }
    }
    static defaultProps={
        view:'eye',
        comment:'edit-3',
        share:'send',
    }
    render() {
        return (
            <View style={[styles.container]}>
            <View style={[styles.header]}>
                <Text style={[styles.headerText]}>--- SpoSync_LOGO ---</Text>
            </View>
            <View style={[styles.totalPostContainer]}>
                <ScrollView>

                    <View style={[styles.userNameContainer]}>
                        <TouchableOpacity  activeOpacity={0.9} ><Avatar rounded
                            source={require('./my_profile_pic.jpg')}
                            size={50}
                            containerStyle={{ marginLeft: 10 }} 
                            padding={'5%'} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={[styles.userName]}>{this.state.user1}</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('./my_post.jpg')} style={[styles.Image]} />
                    <View style={[styles.iconContainer]}>
                        <TouchableOpacity>
                            <Icon name={this.props.view} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.comment} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.share} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ padding: '3%', fontSize: 15, textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It
                            was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: .8,
                                marginHorizontal:'15%',
                                marginVertical:'5%'
                            }}/>
                        </View>




                        <View style={[styles.userNameContainer]}>
                        <TouchableOpacity activeOpacity={0.9}><Avatar rounded
                            source={require('./digvijay_profile.jpg')}
                            size={50}
                            containerStyle={{ marginLeft: 10 }}
                            padding={'5%'} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={[styles.userName]}>{this.state.user2}</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('./digvijay_post.jpg')} style={[styles.Image]} />
                    <View style={[styles.iconContainer]}>
                        <TouchableOpacity>
                            <Icon name={this.props.view} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.comment} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.share} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ padding: '3%', fontSize: 15, textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It
                            was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: .8,
                                marginHorizontal:'15%',
                                marginVertical:'5%'
                            }}/>
                        </View>



                        <View style={[styles.userNameContainer]}>
                        <TouchableOpacity activeOpacity={0.9}><Avatar rounded
                            source={require('./ravi_profile.jpg')}
                            size={50}
                            containerStyle={{ marginLeft: 10 }}
                            padding={'5%'} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={[styles.userName]}>{this.state.user3}</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('./ravi_post.jpg')} style={[styles.Image]} />
                    <View style={[styles.iconContainer]}>
                        <TouchableOpacity>
                            <Icon name={this.props.view} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.comment} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name={this.props.share} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ padding: '3%', fontSize: 15, textAlign: 'justify' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It
                            was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: .8,
                                marginHorizontal:'15%',
                                marginVertical:'5%'
                            }}/>
                        </View>
                        
                </ScrollView>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '100%',
    },
    headerText: {
        color: '#fff',
        fontSize: 25
    },
    userNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH,
        backgroundColor:'#F0F8FF'
    },
    userName: {
        fontSize: 18,
        marginHorizontal:'5%', 
    },
    Image: {
        width: WIDTH,
        height: HEIGHT -300,
        resizeMode:'cover'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        borderBottomWidth:0.5,
        borderBottomColor:'#000',
        padding: '1%',
    }
})