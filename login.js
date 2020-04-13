import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
 export default class login extends React.Component{
  
      

render(){
    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}> 
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>

            <Image
            source= {require('./carr.png')}
            style={{ width: 105, height: 105,marginTop:80}}
          /></View>
        

                

          <View style={styles.Input}>
            <TextField
                lineType="none"
                textColor="silver"
                 inputContainerStyle={{paddingTop:2,paddingLeft:20}}
                    label ="example@gmail.com"
                    
                    > 
            </TextField>
            <Image
            source= {require('./email.png')}
            style={{ width: 25, height: 25,position:"absolute",left:250,top:20}}
          /></View>
            <View style={styles.Input}>
            <TextField
            lineType="none"
            textColor="silver"
            inputContainerStyle={{paddingTop:2,paddingLeft:20}}
                title="Minimum 6 characters"
                label="Password"
                    secureTextEntry={true}
                    >  </TextField>
                    <Image
            source= {require('./lock.png')}
            style={{ width: 25, height: 25,position:"absolute",left:250,top:20}}
          /></View>
                 
                     <View style={{backgroundColor:'#37bfbf',height:50,width:"65%",borderRadius:10,
                     marginTop:40,justifyContent:'center',marginLeft:60,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Login</Text>
                </TouchableOpacity></View>
                
                
                    
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UserProfile")}}>
                <Text style={{color:'#37bfbf',fontSize:16,alignContent:'center',fontWeight:"500",paddingTop:10, 
                paddingLeft:60
                ,paddingBottom:30}}>Do u have an account? Register </Text></TouchableOpacity>
            
            
        
            
            
        
        </KeyboardAwareScrollView>
    )
}
}
const styles=StyleSheet.create({
    Input:{borderRadius:10,
        borderColor:'#37bfbf',
        height:60,
        borderWidth:1,
    marginLeft:40
    ,marginTop:40,width:"80%"
    

    }
})