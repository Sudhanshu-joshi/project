import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal, Button,Alert,Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { BackHandler } from 'react-native';
import firebase from 'react-native-firebase'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export class Item extends  React.Component {
   
    
    
      render() {
        
        return (
           
<View>
            <TouchableOpacity onPress={() => { this.props.shift(); }}
              style={{ backgroundColor: "#005580", height:Dimensions.get('window').height/6, 
              width:Dimensions.get('window').width/1.1,borderRadius:10,
              flexDirection: "row", justifyContent: "center",borderColor:"#36cfbf",marginTop:10,marginHorizontal:15,
              borderWidth:3,flexDirection:'row'
               }}>
                   <View style={{flexDirection:"column",marginRight:150,marginTop:2}}>
        <Text style={{
          color:"#36cfbf", fontStyle:"italic",
          fontSize:18,paddingLeft:20,paddingTop:5,fontWeight:"bold"
        }}>

          {this.props.ParkingAddress}</Text>
          <Text style={{textAlign:"center",color:"#36cfbf",fontSize:18,paddingLeft:18,paddingTop:5}}>
          Available Slots:  {this.props.Slot} </Text>
          <Text style={{textAlign:"center",color:"#36cfbf",fontSize:18,paddingTop:5}}>
         Parking Fee:  {this.props.ParkingFee} </Text>
        
        
            </View></TouchableOpacity></View>




    );
  }
}

export default class Addparking extends React.Component {
    constructor() {
      super();
      
      this.ref = firebase.firestore().collection('Parkings')
      
      
  this.unsubscribe=null;
      this.state = { ParkingAddress: '', Slot: '', ParkingFee: '', uid:"",loadingstatus:false,array:[],key:'',
      isVisible : false,t:"",Name:"",email:"",phone:""};
      
    }
   
    // componentWillUnmount(){
    //   BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
    // }
    
    //  openTwoButtonAlert=()=>{
      
    //  this.props.navigation.navigate("UserProfile")
    //   // BackHandler.exitApp()
    //   return true;
    // }
    componentDidMount() {
       this.unsubscribe = this.ref.onSnapshot(this.addLocations)
      AsyncStorage.getItem('ParkingAddress').then((value) => this.setState({ ParkingAddress:value}))
      AsyncStorage.getItem('uid').then((value) => this.setState({ uid:value}))
      AsyncStorage.getItem('Slot').then((value) => this.setState({ Slot:value }))
      AsyncStorage.getItem('ParkingFee').then((value) => this.setState({ ParkingFee:value }))
      
      // BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
    }
       componentWillUnmount() {
        
     this.unsubscribe();
      
     }
    setValueLocally = () => {
     AsyncStorage.setItem('ParkingAddress', this.state.ParkingAddress);
       AsyncStorage.setItem('Slot', this.state.Slot);
       AsyncStorage.setItem('uid', this.state.uid);
       AsyncStorage.setItem('ParkingFee', this.state.ParkingFee);
      
     }
    // getValueLocally = () => {
    //   AsyncStorage.getItem('uid').then((value) => this.setState({ uid:value}))
    //   AsyncStorage.getItem('ParkingAddress').then((value) => this.setState({ ParkingAddress:value }))
    //   AsyncStorage.getItem('Slot').then((value) => this.setState({ Slot:value }))
    //   AsyncStorage.getItem('ParkingFee').then((value) => this.setState({ ParkingFee:value }))
    //  }
      
    addLocations = (querySnapshot) =>  {
      this.setState({loadingstatus:true});
      
    
        
          const array= [];
          querySnapshot.forEach((doc) => {
            const { ParkingAddress,ParkingFee ,Slot,uid} = doc.data();
          
      
          array.push({
            key: doc.id, // Document ID
            doc,
            ParkingAddress,
            uid,
            // latitude: this.state.latitude,
            // longitude: this.state.longitude,

            Slot,
            ParkingFee,
           
          })
          this.key = doc.id
          // console.log(doc.data());
        });
    
        
            this.setState({loadingstatus:false,array:array,key: this.key});
            
      }
      catch (error) {
        this.setState({loadingstatus:false});
        alert(error);    
  
      }
      signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            alert(e);
        }
      }
      openTwoButtonAlerts=()=>{
        Alert.alert(
          'Logout',
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
    
    render() {
      this.addLocations;
      return (
        <View style={{flex:1,backgroundColor:'#36cfbf'}}> 
            
              <View style={{flex:0.8,backgroundColor:'#36cfbf',flexDirection:"row"}}>
            <TouchableOpacity  style={{alignItems:"flex-start",marginVertical:7,justifyContent:"flex-start"}}
            onPress={() =>{this.props.navigation.navigate("UserProfile")
    
                  
            }}>
    <Image style={{ height: Dimensions.get('window').height/20, width: Dimensions.get('window').width/14,
     }}
      source={require('./back.png')}

    /></TouchableOpacity>
      <Text style={{color:"#005580",fontSize:22,fontWeight:"700",paddingLeft:30,paddingVertical:10}}>ShowParking
      </Text>
      
       <TouchableOpacity  style ={{ alignItems:"flex-end",marginVertical:10,marginHorizontal:140,justifyContent:"flex-end"}}
       onPress={() =>{this.openTwoButtonAlerts()}
    
                  
  }>
    <Image style={{ height: Dimensions.get('window').height/26, width: Dimensions.get('window').width/14, 
   }}
      source={require('./dotss.png')}

    /></TouchableOpacity> 
     
              </View>
             
              
                    
    <SafeAreaView style={{ flex: 10, backgroundColor: "#005580"}}>
          <FlatList
        
          multiline={true}
          
            data={this.state.array}
            renderItem={({ item, index }) => <Item
             ParkingAddress={item.ParkingAddress} Slot={item.Slot} ParkingFee={item.ParkingFee} key={item.key} 
            uid={item.uid} Name={item.Name} email={item.email} phone={item.phone}
             
              shift={() => this.props.navigation.navigate("Slots",
            { ParkingAddress:item.ParkingAddress,key:item.key,uid:item.uid  })}>
              

            </Item>}
            keyExtractor={(item, index) => index}
          ></FlatList>
          </SafeAreaView>
        

                    </View>
      )
}
}