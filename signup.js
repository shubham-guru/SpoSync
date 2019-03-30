import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  Alert,
  Keyboard
} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';
export default class Signup extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      username: '',
      email:'',
      game:'',
      password:'',
      cpassword:'',
      passwordError:true,
      cpasswordError:true,
      nameError:true,
      gameError:true
    }
  }
  /*validation(text,type){
    if(type == 'name'){
      alph=/^[a-zA-Z]+$/
      if(alph.test(text)){
       this.setState({
         nameError:true
       })
      }
      else{
        this.setState({
          nameError:false
        })
      }
    }
  }
  gamevalidation(gametext,type){
    if(type == 'game'){
      alph=/^[a-zA-Z]+$/
      if(alph.test(gametext)){
        this.setState({
          gameError:true
        })
      }
      else{
        this.setState({
          gameError:false
        })
      }
    }
  }
  /*submitForm=()=>{
    const {fullname} = this.state;
    if(fullname == ""){
      Alert.alert("please enter something");
    }
    else{
      Alert.alert("okk");
    }
    Keyboard.dismiss();
  }
  /*emailValidation(text,email){
    if(email == 'email'){
      if(text == ''){
        Alert.alert("Please enter your email")
      }
    }
  }*/
  Signup=()=>{
    alph=/^[a-zA-Z]+$/
    const {username,email,game,password,cpassword} = this.state;
    if(username.length == '' || email.length == '' || game.length == '' || password.length == '' || cpassword == ''){
      Alert.alert("Please fill all the details");      
    }
    else if(!alph.test(username)) {
      this.setState({nameError:false})
      Alert.alert("Your name should not contain numbers and space");
    }
    else if (password.length<6){
      this.setState({passwordError:false})
      Alert.alert("Password must be atleast of 6 characters");
    }
    else if (!(password === cpassword)){
      this.setState({passwordError:false,cpasswordError:false})
      Alert.alert("Password doesn't match");
    }
    else{
      Alert.alert("WELCOME");
    }
  }
  render() {
        
    return (

      <ImageBackground source={require('./football-pitch-320100_1920.jpg')} style={styles.container}>

        <View style={styles.innerContainer}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View><Text style={styles.header} >
            </Text></View>
            <View style={styles.loginContainer}>
              <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="user" size={35} color='#008' />
              </View>


              <TextInput style={[styles.userdata, !this.state.nameError ? styles.redBorder : null]}
                placeholder='Fullname'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                underlineColorAndroid='transparent'
                autoCorrect={false} returnKeyType={"next"}
                onChangeText = { (name) => this.setState({username: name})}>
                </TextInput>

            </View>

            <View style={styles.loginContainer}>
              <View style={{ height: 35, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="envelope" size={35} color='#008' />
              </View>
              <TextInput style={[styles.userdata]} keyboardType={"email-address"}
                placeholder='E-mail'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                underlineColorAndroid='transparent'
                clearButtonMode={'always'}
                autoCorrect={false} returnKeyType={"next"}
                onChangeText={(useremail)=>this.setState({email: useremail})}></TextInput>
            </View>

            <View style={styles.loginContainer}>
              <View style={{ height: 30, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="trophy" size={35} color='#008' />
              </View>
              <TextInput style={[styles.userdata, /*!this.state.gameError ? styles.redBorder : null*/]}
                placeholder='Game'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                underlineColorAndroid='transparent'
                autoCorrect={false} returnKeyType={"done"}
                onChangeText={(usergame)=>this.setState({game: usergame})}
                ></TextInput>
            </View>


            <View style={styles.loginContainer}>
              <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="lock" size={35} color='#008' />
              </View>
              <TextInput style={[styles.userdata, !this.state.passwordError ? styles.redBorder : null]} secureTextEntry={true}
                placeholder='Password'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                underlineColorAndroid='transparent'
                autoCorrect={false} returnKeyType={"next"}
                onChangeText={(userpassword)=>this.setState({password:userpassword})}>
                </TextInput>
              {/* <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
                <Icon name={this.setState.press == false ? 'user':'lock'}
                   size={12}
                />
    </TouchableOpacity>*/}
            </View>


            <View style={styles.loginContainer}>
              <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="lock" size={35} color='#008' />
              </View>
              <TextInput style={[styles.userdata, !this.state.cpasswordError ? styles.redBorder : null]} secureTextEntry={true}
                placeholder='Confirm Password'
                placeholderTextColor={'rgba(0,0,0,0.4)'}
                underlineColorAndroid='transparent'
                autoCorrect={false} returnKeyType={"next"}
                onChangeText={(usercpassword)=>this.setState({cpassword:usercpassword})}></TextInput>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.buttonContainer}  
              onPress={this.Signup}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Sign up</Text>    
              </TouchableOpacity>

              <Text style={styles.lastText}>Already have an account ?
          <Text style={{ fontWeight: 'bold' }} onPress={() => Actions.login()}> Login</Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  },
  header: {
    fontSize: 20,
    color: '#000',
    marginBottom: 30,
  },
  innerContainer: {
    width: '100%',
    height: '80%',
    borderRadius: 30,
  },
  userdata: {
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 10,
    paddingHorizontal: 25,
    width: WIDTH - 100,
    height: 45,
    // textTransform:'capitalize'
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    paddingLeft: 10,
    backgroundColor: 'rgba(240,230,140, 0.5)',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: WIDTH - 100,
    borderRadius: 25,
    backgroundColor: "rgba(0,100,0,0.8)",
  },
  lastText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  redBorder: {
    borderWidth: 1,
    borderColor: 'red'
  },
})