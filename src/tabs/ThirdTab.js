import React,{Component}  from 'react';
import{
    Text, View
} from 'react-native';
export default class ThirdTab extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize:50}}>THIRD TAB</Text>
                <Text style={{fontSize:30}}>Hell Yeah..!!</Text>
            </View>
        )
    }
}