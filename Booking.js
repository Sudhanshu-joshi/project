import React from 'react';
import {View, Button, Platform,Text,TouchableOpacity,Dimensions,Image,BackHandler,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

 
  
 
export default class Booking  extends React.Component{
  fieldRef = React.createRef();  

  // constructor() {
  //   super();
  //   //  this.ref = firebase.firestore().collection("tfuj"
  //   //  ).doc(this.props.route.params.key)
  
    
  
  //   this.state = {
  //     date:new Date(),
  //       // time:new Date().toTimeString(),
  //       selectedHours: new Date().getHours(),
  
  //   selectedMinutes: new Date().getMinutes(),
  //   vehicleno:"",text:"",
  //   TimeOut:"",
  //    date:"",time:"0:0",slots:"",
  // TimeIn:"",
  //    name:this.props.route.params.name,Name:"",phone:"",email:"",loadingstatus:false,
  //    SlotNumber:this.props.route.params.SlotNumber,BookingId:this.props.route.params.BookingId,
  //    Status:this.props.route.params.Status
  //   }
  //   key=this.props.route.params.key;
   
  // }
  
  state = {
        date:new Date(),
          // time:new Date().toTimeString(),
          selectedHours: new Date().getHours(),
    
      selectedMinutes: new Date().getMinutes(),
      vehicleno:"",text:"",
      TimeOut:"",
       date:"",time:"0:0",slots:"",
    TimeIn:"",
       name:this.props.route.params.name,Name:"",phone:"",email:"",loadingstatus:false,
       SlotNumber:this.props.route.params.SlotNumber,BookingId:this.props.route.params.BookingId,
       Status:this.props.route.params.Status,
    
      }
      key=this.props.route.params.key;
  
  // componentWillMount(){
  //     this.ref = firebase.firestore().collection(this.props.route.params.uid).doc(this.props.route.params.key)
    
  //   BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
  // }
  componentWillUnmount(){
  
    BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
  }
  
   openTwoButtonAlert=()=>{
    
   this.props.navigation.navigate("Slots");
    BackHandler.exitApp()
    return true;
  }
  componentDidMount() {
    this.ref = firebase.firestore().collection(this.props.route.params.uid).doc(this.props.route.params.key)
    
    BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
    // AsyncStorage.getItem('ParkingAddress').then((value) => this.setState({ ParkingAddress:ParkingAddress }))
    AsyncStorage.getItem('Name').then((value) => this.setState({ Name:value }))
    AsyncStorage.getItem('phone').then((value) => this.setState({ phone:value}))
     AsyncStorage.getItem('email').then((value) => this.setState({ email:value }))
     AsyncStorage.getItem('SlotNumber').then((value) => this.setState({ SlotNumber:value }))
  }
  
  openTwoButtonAlerts=()=>{
            Alert.alert(
              'Exit',
                'Are you sure?',
              [
                {text: 'Yes', onPress: () => BackHandler.exitApp()},
                {text: 'No', onPress: () => console.log('You are on same page'), style: 'cancel'},
              ],
              { 
                cancelable: true 
              }
            );
          }
 

          sendPushNotification = async (tokan) => {
            const FIREBASE_API_KEY = "AAAAVFbi4Wg:APA91bF259EcQyPmRLbuHz2TOsO4m7xoYpDgix0uME9-4EoQuyht_Wm1Y_bsOtBsPq7c9fJLnN0ym_snVYUYA9VpMtF2956Or1C5l_JLC2jKqsJ1eMvZGtRA9qgW5csrxsQP7-EYjJmw";
            const message = {
                registration_ids: [tokan],
                notification: {
                    title: "New Booking",
                    body: "One New Booking",
                    "vibrate": 1,
                    "sound": 1,
                    "show_in_foreground": true,
                    "priority": "high",
                    "content_available": true,
                },
                data: {
                    title: "india vs south africa test",
                    body: "IND chose to bat",
                    score: 50,
                    wicket: 1
                }
            }
    
            let headers = new Headers({
                "Content-Type": "application/json",
                "Authorization": "key=" + FIREBASE_API_KEY
            });
    
            let response = await fetch("https://fcm.googleapis.com/fcm/send", { method: "POST", headers, body: JSON.stringify(message) })
            response = await response.json();
            // console.log(response);
    
    
        }
  
    addRandom = () => {
      
      // alert("vvvvvvvvvv")
      this.ref.update ({
        SlotNumber:this.props.route.params.SlotNumber,
        BookingId:this.props.route.params.BookingId,
        Status:this.props.route.params.Status == true? false : true,

    //  ParkingAddress:this.props.route.params.ParkingAddress, 
    Name:this.state.Name,
    email:this.state.email,
    phone:this.state.phone,
// slots:this.state.slots,
        vehicleno:this.state.vehicleno,
         
          date: this.state.date,
          TimeIn: this.state.selectedHours +":"+ this.state.selectedMinutes +"min",
          TimeOut: this.state.time+"min",
      
           
      });
      
   Alert. alert('Alert',
   "SlotNumber "+  this.props.route.params.SlotNumber + " is"+  " booked" + " by "+ this.state.Name+ 
       "     Booking Id: " +this.props.route
       .params.BookingId+
        "   Date: "+this.state.date+ "   Time: "+this.state.selectedHours +":"+ this.state.selectedMinutes +"min",
        [
          {text: 'ok', onPress: () => this.props.navigation.navigate("Slots")},
          
        ],
        { cancelable: false }
          
         
        
       
         )
         
        this.sendPushNotification(this.props.route.params.tokan)
        
        // console.log("tocan data  "+this.props.route.params.tokan)
      //  if(this.state.vehicleno == ''&& this.state.date == ''&& this.state.TimeIn==''&& this.state.TimeOut =='')
      //  alert("All fields are mandatory")
      
      
      
      //  this.props.navigation.navigate('BookingHistory', {
      //      key:this.props.route.params.key,
      //      uid:this.props.route.params.uid,
          
      //     SlotNumber:this.props.route.params.SlotNumber,
      //     Status:this.props.route.params.Status ,
      //    BookingId:this.props.route.params.BookingId,
      //      Name:this.Name,
      //      email: this.email,
      //     phone:this.phone,
      //      vehicleno:this.vehicleno,
      //      date:this.date,
      //     //  slots:this.slots,
      //      TimeIn:this.TimeIn,TimeOut:this.TimeOut
          // });
      
      
    }
   
   
    onSubmit = () => {
      let { current: field } = this.fieldRef;
   
      console.log(field.value());
    };
   
    formatText = (text) => {
      return text.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
    };
    
    onChange = (hour, minute)=> {
      this.setState({ time: `${hour}:${minute}` })};
     
     
     
     
    render() {
      console.log(this.props.route.params);
      const { selectedHours, selectedMinutes ,time} = this.state;
      
   
      return (
       

< KeyboardAwareScrollView style={{flex:1,backgroundColor:'#005580'}}>
  {/* <View style={{backgroundColor:'#36cfbf',flexDirection:"row",flex:0.8}} >
            
            <TouchableOpacity onPress={() =>{this. props.navigation.navigate("Slots")}
    
                  
  }>
    <Image style={{ height: Dimensions.get('window').height/20, width: Dimensions.get('window').width/14,
     alignContent: "center",marginLeft:6}}
      source={require('./back.png')}

    /></TouchableOpacity>
      <Text style={{color:"#005580",fontSize:20,fontWeight:"700",paddingLeft:30,paddingTop:5}}>
        {this.props.route.params.SlotNumber}
      </Text>
      <TouchableOpacity onPress={() =>{this.openTwoButtonAlerts()}
    
                  
  }>
    <Image style={{ height: Dimensions.get('window').height/26, width: Dimensions.get('window').width/14, 
    alignContent: "center",marginHorizontal:130,marginTop:5}}
      source={require('./dotss.png')}

    /></TouchableOpacity>
              
              
              </View> */}

<View style={{flex:0.8,backgroundColor:'#36cfbf',flexDirection:"row"}}>
            <TouchableOpacity  style={{ alignItems:"flex-start",marginVertical:7,justifyContent:"flex-start"}
            }onPress={() =>{this.props.navigation.navigate("Slots")
    
                  
            }}>
    <Image style={{ height: Dimensions.get('window').height/20, width: Dimensions.get('window').width/14,
    }}
      source={require('./back.png')}

    /></TouchableOpacity>
      <Text style={{color:"#005580",fontSize:22,fontWeight:"700",paddingLeft:30,paddingVertical:10}}>SlotNumber {this.props.route.params.SlotNumber}
      </Text>
      
       
              
              </View>
                    
          {/* <Text style={{fontSize:28,color:'#36cfbf',fontStyle:"italic",paddingHorizontal:30,paddingVertical:20}}>
            Enter Ur Booking Detail:</Text> */}
           <View style={{ alignItems: 'center' ,flex:1,backgroundColor:'#005580'}}>
          <View style={{marginTop:40,
          width: Dimensions.get('window').width/1.4}}>
          <TextField
              textColor="black"
              tintColor="#36cfbf"
              baseColor='#36cfbf'
              lineWidth ={4}
              lineType="solid"
             label ="Vehicle no:"
             formatText={this.formatText}
        onSubmitEditing={this.onSubmit}
        ref={this.fieldRef}
             onChangeText={(text)=>this.setState({vehicleno:text})}
                value={this.state.vehicleno}
             inputContainerStyle={{paddingLeft:70}}
         
          /></View>
        
          
          <View style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width/1.4,
                borderBottomWidth: 4,
                borderRadius:1,
                borderColor: '#36cfbf',
                marginTop: 25,
              }}>
    
    
            
          
          <DatePicker
    
          date={this.state.date} 
          style={{width: 200}}
          mode="date" 
         is24Hour={true}
          format="DD-MM-YYYY"
          minDate="01-01-2020"
          maxDate="01-01-2045"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
         
          
        
          onDateChange={(date) => {this.setState({date: date})}}/>
          </View>
         
           <View style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width/1.4,
                borderBottomWidth: 4,
                borderRadius:1,
                borderColor: '#36cfbf',
                marginTop: 15,
              }}>
    
            <Text style={{color:'#36cfbf'}}>TimeIn:{selectedHours}:{selectedMinutes}min </Text>
            <TimePicker
        
          selectedHours={selectedHours}
         selectedMinutes={selectedMinutes}
          is24Hour={true}
          
          onChange={(hours, minutes) => this.setState({ 
               selectedHours: hours, selectedMinutes: minutes 
         })}
        />
          </View> 
          
           <View style={{ 
                alignItems: 'center',
                justifyContent: 'center',
                width: Dimensions.get('window').width/1.4,
                borderBottomWidth: 4,
                borderRadius:1,
                borderColor: '#36cfbf',
                marginTop: 15,
              }}>
    <Text style={{color:'#36cfbf'}}>TimeOut: {time}min</Text>
  
    <TimePicker
    is24Hour={true}
    
          onChange={this.onChange}
          value={this.state.time}
        />
        </View>
        <View style={{alignItems:'center'}}>
          
          <TouchableOpacity style={{backgroundColor:'#36cfbf',alignSelf:'center',marginTop:40,
          height: Dimensions.get('window').height/14,width: Dimensions.get('window').width/2.4,borderRadius:20}} 
          
            onPress={()=>{
              
                
              if(this.state.vehicleno == "" && this.state.date == ''&& this.state.TimeIn==''&& this.state.TimeOut =='')
         alert("All fields are mandatory")
         else
      
             
               this.addRandom()}
            
            }>
            <Text style ={{color:"#005580",paddingHorizontal:47,paddingVertical:10,fontSize:24,fontWeight:"bold"}}>Book</Text>
          </TouchableOpacity>
          </View></View></ KeyboardAwareScrollView>
      );
    }
  }
  
  