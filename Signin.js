import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet,BackHandler,ActivityIndicator,Modal,Alert}from 'react-native'
import {Dimensions} from 'react-native';
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

 export default class Signin extends React.Component{
   fieldRef = React.createRef();
  

  constructor(props){
    super(props);
    
    this.state = {Name:"",phone:"",email:"",password: "",address:"",text:"",isloading:false,isVisible:false

};
}


componentWillUnmount(){
  BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
}

 openTwoButtonAlert=()=>{
  
 this.props.navigation.navigate("Signin");
  // BackHandler.exitApp()
  return true;
}
// closeActivityIndicator = () => setTimeout(() => this.setState({
//   animating: false}), 6000)

componentDidMount() {
  //  this.closeActivityIndicator();
  BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
  firebase.auth().onAuthStateChanged(user => {
    this.props.navigation.navigate(user ? 'UserProfile' : 'Signin')
  })
}


handleSignUp = () => {
  
  firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() =>
    this.props.navigation.navigate('UserProfile',this.setState({isloading:false,isVisible:false})))
    .catch(error => this.setState({ errorMessage: error.message}))
}
    

// closeActivityIndicator = () => setTimeout(() => this.setState({  
//   animating: false }), 6000) 
 
setValueLocally = () => {
    
     
  AsyncStorage.setItem('Name', this.state.Name);
  AsyncStorage.setItem('phone', this.state.phone);
  AsyncStorage.setItem('email', this.state.email)
  //  alert("Information Stored Successfully.")
  //console.log(Notes);
 
}
onSubmits = () => {
  let { current: field } = this.fieldRef;

  console.log(field.value());
};

formatText = (text) => {
  return text.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
};

 inputs = {};
focusTheField = (id) => {  this.inputs[id].focus();}
render(){

    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}> 
        
           
           <View style={{flex:0.3,backgroundColor:'#005580',flexDirection:"row"}}>
            <TouchableOpacity onPress={() =>{this. props.navigation.navigate("login")}
    
                  
  }>
    
    <Image style={{ height: Dimensions.get('window').height/30, width: Dimensions.get('window').width/11,
     alignContent: "center",marginLeft:5,marginTop:5}}
      source={require('./backs.png')}

    /></TouchableOpacity></View>
     
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>
              
            <Image
            source= {require('./carr.png')}
            style={{ width: Dimensions.get('window').width/2.5, height: Dimensions.get('window').height/5.5,marginTop:5}}
          /></View>
          
          
           <View style={styles.Input}>
            <TextField
                //  lineType="none"
                lineWidth ={2}
                label={"Field 1"}
                lineType="solid"
                baseColor='#36cfbf'
                textColor="silver"
             label ="Full Name"
             onChangeText={(text)=>this.setState({Name:text})}
                value={this.state.Name}
                blurOnSubmit={ false }  
                returnKeyType={ 'next' } 
                onSubmitEditing={() => { this.focusTheField('field2'); }}
              
             inputContainerStyle={{paddingLeft:20}}>
             

            </TextField>
            <Image
            source= {require('./name.png')}
            style={{ width: Dimensions.get('window').width/15, height: Dimensions.get('window').height/30,
            position:"absolute",left:250,top:20}}
          />  
          

          </View>
         
         
            <View style={styles.Input}>
            <TextField
            lineWidth ={2}
            ref={input => { this.inputs['field2'] = input }}
            label={"Field 2"}
            formatText={this.formatText}
          //  onSubmitEditing={this.onSubmit}
                lineType="solid"
            inputContainerStyle={{paddingLeft:20}}
            textColor="silver"
            baseColor='#36cfbf'
            characterRestriction={10}
            
                     label ="PhoneNumber"
                    keyboardType='phone-pad'
                    onChangeText={(text)=>this.setState({phone:text})}
                    value={this.state.phone}
                    blurOnSubmit={ false }  
                returnKeyType={ 'next' } 
                onSubmitEditing={() => { this.focusTheField('field3'),this.onSubmits; }}
                    
                    > 
            </TextField>
            <Image
            source= {require('./phone.png')}
            style={{ width:  Dimensions.get('window').width/15, height:  Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
          /></View>
          <View style={styles.Input}>
            <TextField
            lineWidth ={2}
            ref={input => { this.inputs['field3'] = input }}
            label={"Field 3"}
                lineType="solid"
                baseColor='#36cfbf'
                textColor="silver"
                
                 inputContainerStyle={{paddingLeft:20}}
                    label ="example@gmail.com"
                    onChangeText={(text)=>this.setState({email:text})}
                    value={this.state.email}
                    blurOnSubmit={ false }  
                returnKeyType={ 'next' } 
                onSubmitEditing={() => { this.focusTheField('field4'); }}
                    
                    > 
            </TextField>
            <Image
            source= {require('./email.png')}
            style={{ width: Dimensions.get('window').width/15 , height:  Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
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
         
            <View style={[styles.Input,{marginTop:20}]}>
            <TextField
            lineType="solid"
            ref={input => { this.inputs['field4'] = input }}
            label={"Field 4"}
            
            baseColor='#36cfbf'
            lineWidth ={2}
            textColor="silver"
            inputContainerStyle={{paddingLeft:20}}
                title="Minimum 6 characters"
                label="Password"
                onChangeText={(text)=>this.setState({password:text})}
                value={this.state.password}
                    secureTextEntry={true}
                    blurOnSubmit={ false }  
                    returnKeyType={ 'next' } 
                    onSubmitEditing={() => { this.focusTheField('field5'); }}
                  >

                     </TextField>
                    <Image
            source= {require('./lock.png')}
            style={{ width:  Dimensions.get('window').width/15, height: Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
          /></View>
                    <View style={[styles.Input,{marginTop:30}]}>
            <TextField
                lineType="solid"
                ref={input => { this.inputs['field5'] = input }}
                label={"Field 5"}
                lineWidth ={2}
                baseColor='#36cfbf'
                textColor="silver"
                 inputContainerStyle={{paddingLeft:20}}
                    label ="Address"
                    onChangeText={(text)=>this.setState({address:text})}
                    value={this.state.address}
                    > 
            </TextField>
            <Image
            source= {require('./address.png')}
            style={{ width:Dimensions.get('window').width/15, height:  Dimensions.get('window').height/30,position:"absolute",left:250,top:20}}
          /></View>
                     <View >
                <TouchableOpacity style={{backgroundColor:'#36cfbf',height:Dimensions.get('window').height/14,
                     width:Dimensions.get('window').width/1.6,
                     borderRadius:10,
                     marginTop:35,justifyContent:'center',marginLeft:70,alignItems:'center'}}
                 onPress={() => {
                   if(this.state.Name ==""){
                  alert("Please enter Username")
                   return false
                }else if(this.state.phone ==""){
                alert("please fill PhoneNumber")
                return false
                }
                else if(this.state.email ==""){
                  alert("please fill email")
                   return false
                  }
                  else if(this.state.password ==""){
                    alert("please fill Password")
                    return false
                    }
                    else if(this.state.address ==""){
                      alert("Address must be filled out")
                       return false
                      }
                      else if(this.setState({isloading:true,isVisible:true})){
                  
                        return false
                        }
                    
                      
                    else
                  
                   
                
                 this.handleSignUp(),
              
              
                this.setValueLocally()
                 }}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Register</Text>
                </TouchableOpacity></View>
                
                
                    
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('login')}}>
                <Text style={{color:'#36cfbf',fontSize:16,alignContent:'center',fontWeight:"500",paddingTop:10,paddingLeft:70
                ,paddingBottom:30}}>Already have an account? Login </Text></TouchableOpacity>
            
            
        
            
            
        
        </KeyboardAwareScrollView>
    )
}
}
const styles=StyleSheet.create({
    Input:{
        
         height:Dimensions.get('window').height/12,
        
    marginLeft:40
    ,marginTop:15,
     width:Dimensions.get('window').width/1.2

    }
})