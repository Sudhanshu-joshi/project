import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet,Dimensions,Alert,BackHandler}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage'
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
 export default class Profile extends React.Component{
  constructor() {
    super();
  
    this.state = {Name:"",phone:"",email:"",count:0};
    
  }
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate("ShowParking")
          }, 1500);
        
    BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
  }
  componentWillUnmount(){
    
    BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
  }
  
   openTwoButtonAlert=()=>{
    
   this.props.navigation.navigate("UserProfile");
    // BackHandler.exitApp()
    return true;
  }
  signOutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        alert(e);
    }
  }
  openTwoButtonAlert1=()=>{
     Alert.alert(
      
      'LogOut',
        'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.signOutUser()},
        {text: 'No', onPress: () => console.log('You are on same page'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }
  
render(){
    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}> 
          {/* <View style={{flex:0.7,backgroundColor:"#36cfbf"}}>

                    <TouchableOpacity onPress={() =>{this.openTwoButtonAlert1()}
    
                  
  }>
    <Image style={{ height: Dimensions.get('window').height/26, width: Dimensions.get('window').width/14, 
    alignContent: "center",borderRadius:16,marginLeft:327,marginTop:7}}
      source={require('./dotss.png')}

    /></TouchableOpacity>

                    </View> */}
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>

            <Image
            source= {require('./photo.jpg')}
            style={{ width: Dimensions.get('window').width/1.5, height: Dimensions.get('window').height/3.5,marginTop:50,
            borderColor:'#36cfbf',borderWidth:5,
            borderRadius:20}}
          />
          
          </View>
        

            <View style={styles.Input}>
            <Text style={{fontSize:29,color:'#36cfbf',fontWeight:"600",paddingLeft:20,paddingTop:50}}>
            Hi!! Choose Your 
             Parking  Area 
               Location..</Text>
            <Image
            source= {require('./parkk.png')}
            style={{ width: Dimensions.get('window').width/10, height: Dimensions.get('window').height/16,marginLeft:160,
            position:"absolute",
            marginTop:120}}
          />
            </View>

            <View style={{backgroundColor:'#36cfbf',height:Dimensions.get('window').height/14,
                     width:Dimensions.get('window').width/2,borderRadius:10,
                     marginTop:-30,justifyContent:'center',marginLeft:95,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{
                  
                  
                 
                this.props.navigation.navigate("ShowParking")}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>ShowParking</Text>
                </TouchableOpacity></View>
            
            
        
        </KeyboardAwareScrollView>
    )
}
}
const styles=StyleSheet.create({
    Input:{borderRadius:30,
        
        borderBottomColor:'#36cfbf',
         height:Dimensions.get('window').height/3,
         borderBottomWidth:7,borderLeftColor:"white",borderLeftWidth:9,
    marginLeft:20
    ,marginTop:60,width:Dimensions.get('window').width/1.2
    

    }
})