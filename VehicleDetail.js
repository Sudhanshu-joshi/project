import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
 export default class Signin extends React.Component{
  
      

render(){
    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}> 
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>

           <Text style={{fontSize:30,color:"silver",paddingTop:50}}>Enter ur Vehicle Details</Text>
           <View style={{borderRadius:10,borderColor:'#37bfbf',height:60,borderWidth:1,
          marginLeft:20
          ,marginTop:55,width:"70%"}}>
            <TextField
                lineType="none"
             label ="Vehicle Number :"
             textColor="silver"
             inputContainerStyle={{paddingTop:2,paddingLeft:40}}
                    > 
            </TextField></View>
            <View style={styles.Input}>
            <TextField
                lineType="none"
                textColor="silver"
                inputContainerStyle={{paddingTop:2,paddingLeft:40}}
                     label ="Date :"
                    

                    > 
            </TextField>
            <Image
            source= {require('./date.png')}
            style={{ width: 40, height: 40,position:"absolute",left:200,top:10}}
          /></View>
          <View style={styles.Input}>
            <TextField
                lineType="none"
                textColor="silver"
                 inputContainerStyle={{paddingTop:2,paddingLeft:40}}
                    label ="inTime :"
                    
                    > 
            </TextField></View>
            <View style={styles.Input}>
            <TextField
            lineType="none"
            textColor="silver"
            inputContainerStyle={{paddingTop:2,paddingLeft:40}}
            label="outTime :"
            
                    >  </TextField></View>
                    <View style={styles.Input}>
            <TextField
                lineType="none"
                textColor="silver"
                 inputContainerStyle={{paddingTop:2,paddingLeft:40}}
                    label ="Total Amount :"
                    
                    > 
            </TextField></View>
                     <View style={{backgroundColor:'#37bfbf',height:50,width:"45%",borderRadius:10,
                     marginTop:45,justifyContent:'center',marginLeft:30,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Pay</Text>
                </TouchableOpacity></View>
                
                
                    

            
            
        
            
            </View>
        
        </KeyboardAwareScrollView>
    )
}
}
const styles= StyleSheet.create({
    Input:{
        borderRadius:10,borderColor:'#37bfbf',
        height:60,
        borderWidth:1,
          marginLeft:20
          ,marginTop:20,width:"70%"
    }
})
