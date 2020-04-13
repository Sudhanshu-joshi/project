import React from 'react';
import{Text,View,Image,TouchableOpacity,StyleSheet}from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
 export default class Profile extends React.Component{
  
      

render(){
    return(
        
       
          <KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}> 
            <View style={{ flex:1,backgroundColor:'#005580'
            ,justifyContent:"center",alignItems:"center"}}>

            <Image
            source= {require('./photo.png')}
            style={{ width: 150, height: 180,marginTop:40}}
          /></View>
        

        <View style={styles.Input}>
            <TextField
                lineType="none"
             label ="Full Name"
             inputContainerStyle={{paddingTop:2,paddingLeft:20}}
                    > 
            </TextField></View>
            

          <View style={styles.Input}>
            <TextField
                lineType="none"
                
                 inputContainerStyle={{paddingTop:2,paddingLeft:20}}
                    label ="example@gmail.com"
                    
                    > 
            </TextField></View>
           
            <View style={styles.Input}>
            <TextField
                lineType="none"
                inputContainerStyle={{paddingTop:2,paddingLeft:20}}
                     label ="PhoneNumber"
                    keyboardType='phone-pad'

                    > 
            </TextField></View>
            
            
        
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