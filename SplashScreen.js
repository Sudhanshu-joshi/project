import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Button,Image
} from 'react-native';
import firebase from 'react-native-firebase';

const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
export default class LoginScreen extends React.Component {
    constructor() {
       super();
        
      }
      componentDidMount() {
    
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'UserProfile' : 'login')
        })
          }, 1000);
        }
     
    render() {
        return (
            
            

            <View style={{flex:1,backgroundColor:'#005580',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize: 40,fontStyle:'italic',color:'#36cfbf',padding:10}}>Parking Way</Text>
                 <Image
          source={require('./parkk.png')}
          style={{ width: Dimensions.get('window').width/1.2, height:  Dimensions.get('window').height/2.4, justifyContent: "center", margin:20}}
        />
              
               <View style={{backgroundColor:'#36cfbf',height:Dimensions.get('window').height/14,
              width:Dimensions.get('window').width/1.6,borderRadius:30,
                     marginTop:1,justifyContent:'center',marginLeft:15,alignItems:'center'}}>

                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Welcome</Text>
                 {/* <TouchableOpacity onPress={() =>{this.props.navigation.navigate("login")}}>
               
                    <Text style={{color:'white',fontSize:20,alignContent:'center',fontWeight:"700"}}>Welcome</Text>
                </TouchableOpacity> */}
                </View>  
                
              
            </View>
        //   </View> 
        )
    }
}
