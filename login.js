import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet,Dimensions,BackHandler,ActivityIndicator,Alert,Modal}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


import firebase from 'react-native-firebase';

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
  import AsyncStorage from '@react-native-community/async-storage'
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    

 export default class login extends React.Component{
  constructor(props){
    super(props);

    
    this.state = {
      email:"",password: "",text:"",animating:true,isloading:false,isVisible:false

};
}
inputs = {};// function to focus the field
focusTheField = (id) => {  this.inputs[id].focus();}

componentWillUnmount(){
  BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
}

 openTwoButtonAlert=()=>{
  
 this.props.navigation.navigate("login");
  // BackHandler.exitApp()
  return true;
}

// closeActivityIndicator = () => setTimeout(() => this.setState({  
//   animating: false }), 6000)  
componentDidMount() {
  // this.closeActivityIndicator() 
  BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
  firebase.auth().onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'UserProfile' : 'login')
  })
 }

handleLogin = () => {
  const { email, password } = this.state
  firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => this.props.navigation.navigate('UserProfile',this.setState({isloading:false,isVisible:false})))
  
    .catch(error => this.setState({ errorMessage: error.message}))
    
    
}


render(){
    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}>
             
            
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>

            <Image
            source= {require('./carr.png')}
            style={{ width: Dimensions.get('window').width/2.5, height: Dimensions.get('window').height/5.5,marginTop:80}}
          /></View>
        
        
        {/* <ActivityIndicator  animating = {animating} size="large" color="silver" /> */}
          
          
      
          <View style={styles.Input}>
            
          
            <TextField
               lineType="solid"
               label={"Field 1"}

               numberOfLines={1}
               lineWidth ={2}
                baseColor='#36cfbf'
                textColor="silver"
                 inputContainerStyle={{paddingLeft:20}}
                    label ="example@gmail.com"
                    onChangeText={(text)=>this.setState({email:text})}
                    value={this.state.email
                    }
                     blurOnSubmit={ false }  
                     returnKeyType={ 'next' } 
                     onSubmitEditing={() => { this.focusTheField('field2'); }}
                    
                    > 
            </TextField>
            <Image
            source= {require('./email.png')}
            style={{ width:Dimensions.get('window').width/15 , height:  Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
          />
           {this.state.errorMessage &&
          <Text style={{ color: 'red',fontSize:12 }}>
            {this.state.errorMessage}
          </Text>}
          
          </View>
          <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isVisible}
            >
                <View style={{ flex: 1, backgroundColor: '#daf8e3' }}>

                    <View style={{ marginTop: 350, alignSelf: 'center' }}>
                        <View>
                            <ActivityIndicator size='large'
                                color="#45a0e6'" />
                        </View>
                    </View>
                </View>

            </Modal>

            <View style={[styles.Input,{marginTop:30}]}>
            <TextField
             lineType="solid"
             ref={input => { this.inputs['field2'] = input }}
               label={"Field 2"}
          
             numberOfLines={1}
             lineWidth ={2}
            baseColor='#36cfbf'
            textColor="silver"
            inputContainerStyle={{paddingLeft:20}}
                title="Minimum 6 characters"
                label="Password"
                onChangeText={(text)=>this.setState({password:text})}
                value={this.state.password}
                    secureTextEntry={true}
                    >  </TextField>
                    <Image
            source= {require('./lock.png')}
            style={{ width:Dimensions.get('window').width/15 , height:  Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
          /></View>
                 
                     <View >
                <TouchableOpacity style={{backgroundColor:'#36cfbf',height:Dimensions.get('window').height/14,
                     width:Dimensions.get('window').width/1.6,borderRadius:10,
                     marginTop:40,justifyContent:'center',marginLeft:70,alignItems:'center'}} 
                     onPress={() =>{ if(this.state.email ==""){
                      alert("Please enter email")
                      return false
                    }else if(this.state.password ==""){
                    alert("please fill Password")
                    return false
                    }
                    else if(this.setState({isloading:true,isVisible:true})){
                  
                      return false
                      }
                  
                    
                     
                     else 
                       
                    
                    // this.setState({isVisible:true,isloading:true})
          
            this.handleLogin()
                }}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Login</Text>
                </TouchableOpacity></View>
                
                
                    
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Signin")}}>
                <Text style={{color:'#36cfbf',fontSize:16,alignContent:'center',fontWeight:"500",paddingTop:10, 
                paddingLeft:70
                ,paddingBottom:30}}>Do u have an account? Register </Text></TouchableOpacity>
            
            
        
            
            
        
        </KeyboardAwareScrollView>
    )
}
}
const styles=StyleSheet.create({
    Input:{
        
        height:Dimensions.get('window').height/12,
        
    marginLeft:40
    ,marginTop:5,width:Dimensions.get('window').width/1.2
    

    }
})