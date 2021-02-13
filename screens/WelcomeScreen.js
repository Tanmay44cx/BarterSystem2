import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import BarterAnimation from '../components/BarterAnimationScreen.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: ''
    }
  }

  userSignUp = (username, password) =>{
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        console.log("succesful")
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

 

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <BarterAnimation/>
          <Text style={{color:'black'}}> A Trading Method </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>USERNAME</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
            style={styles.loginBox}
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
            />
          </View>
          <Text style={{color:'black', fontSize:18, fontWeight:'bold',marginLeft:55}}>PASSWORD</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.button,{marginBottom:10}]}
              onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
              >
              <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
              >
              <Text style={{color:'black', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'orange'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'Bold',
    fontFamily:'Impact',
    color : 'cyan'
  },
  loginBox:{
    width: 300,
    height: 35,
    borderWidth: 1.5,
    borderColor:'crimson',
    fontSize: 20,
    marginBottom:20,
    marginTop:5

  },
  button:{
    width:"50%",
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"blue",
},
  buttonContainer:{
    flex:1,
  }
})
