import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,  Platform,
  KeyboardAvoidingView,
  Text,Image
} from 'react-native';
import MapView from 'react-native-maps';
import {check, PERMISSIONS, request,Location} from 'react-native-permissions';
import {
  Container,
  Item,
  Label,
  Header,
  Content,
  Footer,
  Left,
  Button,
  Icon,
  FooterTab,
  Body,
  Title,
  Right,
  Input,
} from 'native-base';

import firebase from 'react-native-firebase';


 export default class Addparking extends React.Component {
  constructor() {
    super();
    
    this.ref = firebase.firestore().collection('Location')
this.unsubscribe=null;
    this.state = { longitude: '0', latitude: '0', name: '', slots: '', price: '', loadingstatus:false,array:[],key:"" };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.addLocations)
    // let longitude = this.props.route.params('longitude');
    // longitude = longitude + '';
    //  let latitude = this.props.route.params('latitude');
    //  latitude = latitude + '';
    //  this.setState({ longitude: longitude, latitude: latitude });
  }
    componentWillUnmount() {
  this.unsubscribe();
    
  }
  getKey = ""
  addLocations = (querySnapshot) =>  {
    this.setState({loadingstatus:true});
    
      if(this.state.name == ''&& this.state.slots== '' && this.state.price == '' ){
        alert('All fields are Mandatory');
      }else{
  
      
        const array= [];
        querySnapshot.forEach((doc) => {
          const { name,latitude,longitude,price ,slots} = doc.data();
        
    
        array.push({
          name: this.state.name,
          // latitude: this.state.latitude,
          // longitude: this.state.longitude,
          slots: this.state.slots,
          price: this.state.price,
        })
        this.getKey = doc.id
        console.log(doc.data());
      });
  
      
          this.setState({loadingstatus:false,array:array,key: this.getKey});
          alert('Location Saved');
    }} 
    catch (error) {
      this.setState({loadingstatus:false});
      alert(error);    

    }
    addRandom = () => {
      // alert("vvvvvvvvvv")
      this.ref.add({
       
    
        name:this.state.name,
          // latitude: this.state.latitude,
          // longitude: this.state.longitude,
          slots: this.state.slots,
          price: this.state.price,
      
  
      });
      // alert("bbcmdvm")
    }
    

 
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#005580' }}>
          
        <TouchableOpacity style={{ backgroundColor: '#36cfbf' }}
          
            onPress={() => this.props.navigation.openDrawer()}>
              <Image style={{ height: 34, width:34, alignContent: "center",borderRadius:16,marginLeft:10}}
                      source={require('./icon.png')}
    
                    />

            </TouchableOpacity>
          
          

          <KeyboardAvoidingView
            behavior="padding"
            style={{flex:1}}
            keyboardVerticalOffset={40}
          > 
          <ScrollView> 
          <View style={{flex:1,justifyContent:'center',}}>
            <Text style={{fontSize:36,color:'#36cfbf',fontStyle:'italic',paddingHorizontal:80,paddingVertical:30}}>ADD Parking</Text>
        <View style={{ padding: 30 ,flex:1}}>
          <Item floatingLabel style={{ marginBottom: 20}}>
            <Label style={{ color: '#36cfbf' }}>Location Name</Label>
            <Input style={{ color: 'grey' }} 
            onChangeText={t => this.setState({ name: t })}
            value={this.state.name}
            />
          </Item>

         {/* <Button  style={{height:40,width:40,backgroundColor:"#36cfbf",marginLeft:250,marginTop:10}}
         title="map pin"
            onPress={() => this.props.navigation.navigate('geolocation')}
          />

          <Item floatingLabel style={{ marginBottom: 15 }}>
            <Label style={{ color: '#36cfbf' }}>Latitude</Label>
            <Input
              style={{ color: 'grey' }}
              onChangeText={t => this.setState({ latitude: t })}
              value={this.state.latitude}
            />
          </Item>
          <Item floatingLabel style={{ marginBottom: 15 }}>
            <Label style={{ color: '#36cfbf' }}>Longitude</Label>
            <Input
              style={{ color: 'grey' }}
              onChangeText={t => this.setState({ longitude: t })}
              value={this.state.longitude}
            />
          </Item> */}
          <Item floatingLabel style={{ marginBottom: 20 }}>
            <Label style={{ color: '#36cfbf' }}>Available Parking slots</Label>
            <Input style={{ color: 'grey' }} 
            onChangeText={t => this.setState({ slots: t })}
              value={this.state.slots}
            />
          </Item>
          <Item floatingLabel style={{ marginBottom: 20}}>
            <Label style={{ color: '#36cfbf' }}>Price per hour</Label>
            <Input style={{ color: 'grey' }} 
            onChangeText={t => this.setState({ price: t })}
              value={this.state.price}
            />
          </Item>
          <View style={{alignItems:'center'}}>
          {/* <Button rounded style={{backgroundColor:'#36cfbf',alignSelf:'center',marginTop:10}} 
            onPress={()=> this.addLocations()} 
            loading={this.state.loadingstatus}
          ><Text style={{color:'#ffffff',fontSize:15}}>        Save        </Text></Button> */}
          <Button rounded style={{backgroundColor:'#36cfbf',alignSelf:'center',marginTop:10}} 
            onPress={()=> this.addRandom()
        } 
            loading={this.state.loadingstatus}
          ><Text style={{color:'#ffffff',fontSize:15}}>        add       </Text></Button>
          </View>
        </View>  
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </View> 
    );
  }
}