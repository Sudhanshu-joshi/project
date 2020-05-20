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
  Modal, Button, Alert, Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { BackHandler } from 'react-native';
import firebase from 'react-native-firebase'
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export class Items extends React.Component {

  // constructor(){
  //   super(props);
  // }

 

  
   



  render() {
    
    return (

      <View>
        <TouchableOpacity onPress={() => { this.props.shift(); }}
          style={{
            backgroundColor: "#005580", height: Dimensions.get('window').height / 6,
            width: Dimensions.get('window').width / 2.2, borderRadius: 5,
            flexDirection: "row", justifyContent: "center", borderColor: "#36cfbf", marginTop: 20, marginLeft: 2,
            borderWidth: 3, flexDirection: 'row'
          }}>
          <View style={{ flexDirection: "column", marginTop: 5 }}>
            {/* <Text style={{
          color:"#36cfbf", fontStyle:"italic",
          fontSize:12,paddingLeft:20,paddingTop:5
        }}>

          {this.props.ParkingAddress}</Text> */}
            <Text style={{ textAlign: "center", color: "#36cfbf", fontSize: 18, paddingVertical: 10, paddingTop: 20, fontWeight: "bold" }}>
             Slot Number {this.props.SlotNumber} </Text>
            {/* <TouchableOpacity
          onPress={() => {
            // if (this.state.Status == true) {
              
            //         this.setState({ image: this.state.image = require('./carr.png'),Status:false});
                    
            //       }
            //       else {
                    
            //         this.setState({ image: this.state.image = require('./free.jpeg'),Status:true});
                  
            //       }
                }
              

              }
           
        > */}
            <Image
              source={this.props.Status}
              style={{
                width: Dimensions.get('window').width / 12, height: Dimensions.get('window').height / 26,
                justifyContent: 'flex-end', borderRadius: 10, marginVertical: 75, position: "absolute",

              }}
            />
            {/* </TouchableOpacity>  */}


          </View>
        </TouchableOpacity></View>




    );
  }
}

export default class Slots extends React.Component {
  constructor() {
    super();


    //       const {state} = props.navigation;
    // console.log("PROPS " + state.params.uid);



    this.unsubscribe = null;
    this.state = {
      SlotNumber: "", loadingstatus: false, array: [], Status: "", BookingId: "",
      t: "", Name: "", email: "", phone: "", key: ""
    };

  }

  // componentWillMount(){
  //   this.ref = firebase.firestore().collection(this.props.route.params.uid)
  //   BackHandler.addEventListener("hardwareBackPress",this.openTwoButtonAlert);
  // }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.openTwoButtonAlert);
  }

  openTwoButtonAlert = () => {

    this.props.navigation.navigate("ShowParking");
    // BackHandler.exitApp()
    return true;
  }
  componentDidMount() {

    this.ref = firebase.firestore().collection(this.props.route.params.uid).orderBy("SlotNumber","ASC")


    this.unsubscribe = this.ref.onSnapshot(this.addSlots)
    AsyncStorage.getItem('SlotNumber').then((value) => this.setState({ SlotNumber: value }))
    AsyncStorage.getItem('Name').then((value) => this.setState({ Name: value }))
    AsyncStorage.getItem('BookingId').then((value) => this.setState({ BookingId: value }))
    AsyncStorage.getItem('Status').then((value) => this.setState({ Status: value }))
    BackHandler.addEventListener("hardwareBackPress", this.openTwoButtonAlert);

  }
  componentWillUnmount() {

    this.unsubscribe();

  }
  setValueLocally = () => {
    AsyncStorage.setItem('SlotNumber', this.state.SlotNumber);
    AsyncStorage.setItem('BookingId', this.state.BookingId);
    //  AsyncStorage.setItem('uid', this.state.uid);
    AsyncStorage.setItem('Status', this.state.Status);

  }
  getValueLocally = () => {
    // AsyncStorage.getItem('uid').then((value) => this.setState({ uid:value}))
    AsyncStorage.getItem('SlotNumber').then((value) => this.setState({ SlotNumber: value }))
    AsyncStorage.getItem('BookingId').then((value) => this.setState({ BookingId: value }))
    AsyncStorage.getItem('Status').then((value) => this.setState({ Status: value }))
  }

  addSlots = (querySnapshot) => {
    this.setState({ loadingstatus: true });



    const array = [];
    querySnapshot.forEach((doc) => {
      const { Name, BookingId, SlotNumber, Status, uid, firebaseToken } = doc.data();


      array.push({
        key: doc.id, // Document ID
        doc,

        uid,
        // latitude: this.state.latitude,
        // longitude: this.state.longitude,

        SlotNumber,
        Status,
        BookingId,
        firebaseToken

      })
      this.key = doc.id
      // console.log(doc.data());
    });


    this.setState({ loadingstatus: false, array: array, key: this.key });

  }
  catch(error) {
    this.setState({ loadingstatus: false });
    alert(error);

  }
  openTwoButtonAlerts = () => {
    Alert.alert(
      'Exit',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('You are on same page'), style: 'cancel' },
      ],
      {
        cancelable: true
      }
    );
  }
  
  render() {

    this.addSlots;
    // console.log(this.props.route.params.uid)
    return (
      <View style={{ flex: 1, backgroundColor: '#36cfbf' }}>

        {/* <View style={{flex:0.6,backgroundColor:'#36cfbf',flexDirection:"row"}}>
            <TouchableOpacity onPress={() =>{this. props.navigation.navigate("ShowParking")}
    
                  
  }>
    <Image style={{ height: Dimensions.get('window').height/20, width: Dimensions.get('window').width/14,
     alignContent: "center",marginLeft:6}}
      source={require('./back.png')}

    /></TouchableOpacity>
      <Text style={{color:"#005580",fontSize:20,fontWeight:"700",paddingLeft:30,paddingTop:5}}> {this.props.route.params.ParkingAddress}
      </Text>
      
              
              </View>
              */}

        <View style={{ flex: 0.8, backgroundColor: '#36cfbf', flexDirection: "row" }}>
          <TouchableOpacity  style={{ alignItems:"flex-start" ,marginVertical: 7,justifyContent:"flex-start"}}
          onPress={() => {
            this.props.navigation.navigate("ShowParking")


          }}>
            <Image style={{
              height: Dimensions.get('window').height / 20, width: Dimensions.get('window').width / 14,
             
            }}
              source={require('./back.png')}

            /></TouchableOpacity>
          <Text style={{ color: "#005580", fontSize: 22, fontWeight: "700", paddingLeft: 30, paddingVertical: 10 }}>{this.props.route.params.ParkingAddress}
          </Text>

          <TouchableOpacity style={{ marginVertical: 10, marginLeft: 210,justifyContent:"flex-end",alignItems:"flex-end"}} 
          onPress={() => { this.openTwoButtonAlerts() }


          }>
            <Image style={{
              height: Dimensions.get('window').height / 26, width: Dimensions.get('window').width / 14,
              
            }}
              source={require('./dotss.png')}

            /></TouchableOpacity>

        </View>

        <SafeAreaView style={{ flex: 10, backgroundColor: "#005580" }}>

          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: "space-around"
            }}

            multiline={true}

            data={this.state.array}
            renderItem={({ item, index }) => <Items
              ParkingAddress={item.ParkingAddress} SlotNumber={item.SlotNumber} key={item.key} uid={item.uid}
              BookingId={item.BookingId} Name={item.Name} email={item.email} phone={item.phone} 
              Status={item.Status==true?require('./carr.png'):require('./free.jpeg') }

              shift={() => this.props.navigation.navigate("Booking",
                {
                  key: item.key,
                  SlotNumber: item.SlotNumber,
                  Status: item.Status,
                  uid: this.props.route.params.uid,
                  tokan: item.firebaseToken,

                  BookingId: item.BookingId
                })}>


            </Items>}
            keyExtractor={(item, index) => index}
          ></FlatList>
        </SafeAreaView>



      </View>
    )
  }
}