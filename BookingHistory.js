import React from 'react';
import {View, Button, Platform,Text,TouchableOpacity,Dimensions,Image,FlatList,Modal,
    SafeAreaView,Alert,
    BackHandler,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from 'react-native-material-textfield';
export class Item extends  React.Component {
   
    
    
    render() {
      
      return (
        <View>
          
          <View
            style={{ backgroundColor: "#005580", marginBottom: 5, height:Dimensions.get('window').height/2.5, 
            width:Dimensions.get('window').width/1.1,borderRadius:10,
            flexDirection: "row", justifyContent: "center",marginTop:20,borderColor:"#36cfbf",marginHorizontal:10,
            borderWidth:3,flexDirection:'row'
             }}>
                 <View style={{flexDirection:"column",marginRight:140,marginTop:2}}>
      
       <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:18,paddingLeft:40,paddingTop:3,fontWeight:"bold"
      }}>

        Name : {this.props.Name}</Text>
        <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       Vehicle no : {this.props.vehicleno}</Text>
        <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>
SlotNumber: {this.props.SlotNumber}</Text>
        <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       email : {this.props.email}</Text>
       <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       Phoneno : {this.props.phone}</Text>
       <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       Date : {this.props.date}</Text>
       <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       TimeIn : {this.props.TimeIn}</Text>
       <Text style={{
        color:"#36cfbf", fontStyle:"italic",
        fontSize:16,paddingLeft:40,paddingTop:3,fontWeight:"700"
      }}>

       TimeOut : {this.props.TimeOut}</Text>
        
          </View></View></View>





  );
}
}
export default class BookingHistory extends React.Component{
    constructor(props) {
      super(props);
      
     this. state = {
       date:new Date(),
          // time:new Date().toTimeString(),
          selectedHours: 0,
    
      selectedMinutes: 0,
    Name:"",vehicleno:"",date:"",TimeIn:"",TimeOut:"",phone:"",email:'',
        loadingstatus:true,array:''
       }
       
    }
   
    
    componentWillUnmount(){
      BackHandler.removeEventListener("hardwareBackPress",this.openTwoButtonAlert);
    }
    
     openTwoButtonAlert=()=>{
      
     this.props.navigation.navigate("BookingHistory");
      // BackHandler.exitApp()
      return true;
    }
    
    componentDidMount() {
      //  this.ref = firebase.firestore().collection(this.props.route.params.key)
       

      

       
        // this.unsubscribe=null;
      BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
      //  this.unsubscribe = this.ref.onSnapshot(this.showBooking)
    
     AsyncStorage.getItem('Name').then((value) => this.setState({ Name:value }))
      AsyncStorage.getItem('phone').then((value) => this.setState({ phone:value}))
       AsyncStorage.getItem('email').then((value) => this.setState({ email:value }))
       AsyncStorage.getItem('SlotNumber').then((value) => this.setState({ SlotNumber:value }))
       AsyncStorage.getItem('Status').then((value) => this.setState({ Status:value }))
       AsyncStorage.getItem('TimeIn').then((value) => this.setState({ TimeIn:value }))
       AsyncStorage.getItem('TimeOut').then((value) => this.setState({ TimeOut:value }))
       AsyncStorage.getItem('date').then((value) => this.setState({ date:value }))
       AsyncStorage.getItem('vehicleno').then((value) => this.setState({ vehicleno:value }))
    
    }
    // getValueLocally()
    // {      AsyncStorage.getItem('Name').then((value) => this.setState({ data }))
    //       AsyncStorage.getItem('phone').then((value) => this.setState({ data}))
    //        AsyncStorage.getItem('email').then((value) => this.setState({ data }))
    //        AsyncStorage.getItem('SlotNumber').then((value) => this.setState({ data }))
    //        AsyncStorage.getItem('Status').then((value) => this.setState({ data }))
    //        AsyncStorage.getItem('TimeIn').then((value) => this.setState({ data}))
    //        AsyncStorage.getItem('TimeOut').then((value) => this.setState({data }))
    //        AsyncStorage.getItem('date').then((value) => this.setState({ data }))
    //        AsyncStorage.getItem('vehicleno').then((value) => this.setState({ data}))
    //     }

    //   componentWillUnmount() {
    // this.unsubscribe();
      
    // }
   
    
    // showBooking = (querySnapshot) => {
      
    
        
    //       const array= [];
    //       querySnapshot.forEach((doc) => {
    //         const { vehicleno,TimeOut,TimeIn,date,time,Name,phone,email,ParkingAddress,SlotNumber,Status} = doc.data();
          
      
    //       array.push({
    //         ParkingAddress,
    //         Name,SlotNumber,Status,
    //         email,phone,
    //         vehicleno,
    //         date,
    //         TimeIn,TimeOut
    //         })
    //       this.key = doc.id
    //        console.log(doc.data());
    //     });
    
        
    //     this.setState({loadingstatus:false,array:array,key: this.key});
       
     
    //   }
    
      openTwoButtonAlert=()=>{
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
    
      render() {
        // console.log(this.props)
        // this.showBooking;
        return (
  //         <View style={{flex:1,backgroundColor:'#005580'}}> 
  //           <View style={{flex:0.07,backgroundColor:'#36cfbf',flexDirection:"row"}}>
  //           <TouchableOpacity onPress={() =>{this. props.navigation.navigate("Booking")}
    
                  
  // }>
  //   <Image style={{ height: Dimensions.get('window').height/20, width: Dimensions.get('window').width/14,
  //    alignContent: "center",borderRadius:16,marginLeft:10}}
  //     source={require('./back.png')}

  //   /></TouchableOpacity>
  //     <Text style={{color:"#005580",fontSize:22,fontWeight:"bold",paddingLeft:50,paddingTop:5}}>BookingHistory
  //     </Text>
  //     <TouchableOpacity onPress={() =>{this.openTwoButtonAlert()}
    
                  
  // }>
  //   <Image style={{ height: Dimensions.get('window').height/26, width: Dimensions.get('window').width/14, 
  //   alignContent: "center",borderRadius:16,marginLeft:80,marginTop:7}}
  //     source={require('./dotss.png')}

  //   /></TouchableOpacity>
              
             
                      
      <SafeAreaView style={{ flex: 10, backgroundColor: "#005580"}}>
            <FlatList
          
            multiline={true}
            
              data={this.state.Name}
              
              renderItem={({ item, index }) => <Item
              ParkingAddress={item.ParkingAddress}
               Name={item.Name} vehicleno={item.vehicleno} email={item.email} key={item.key} SlotNumber={item.SlotNumber}
               Status={item.Status}
               phone={item.phone} date={item.date} TimeIn={item.TimeIn} TimeOut={item.TimeOut} slots={item.slots}
               
                
              >
                
  
              </Item>}
              
              keyExtractor={(item, index) => index}
              
            > console.log(data);</FlatList>
          
            </SafeAreaView>
            
           

        )
}
}