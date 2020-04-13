import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Button,Image
} from 'react-native';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#005580',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize: 40,fontStyle:'italic',color:'#37bfbf',padding:20}}>Parking Way</Text>
                 <Image
          source={require('./car.png')}
          style={{ width: "80%", height: 280, justifyContent: "center", margin:30}}
        />
              
              <View style={{backgroundColor:'#37bfbf',height:50,width:"65%",borderRadius:30,
                     marginTop:20,justifyContent:'center',marginLeft:15,alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{this.props.navigation.navigate("Signin")}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Welcome</Text>
                </TouchableOpacity></View>
                
              
            </View>
        )
    }
}
