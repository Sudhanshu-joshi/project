import React, { Component } from 'react';
 import { Alert, StyleSheet, Text, View, TouchableOpacity ,Platform,Button} from 'react-native';
 import Geolocation from '@react-native-community/geolocation';
 import {check, PERMISSIONS, request} from 'react-native-permissions';
 import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';  
import { Marker } from 'react-native-maps';

 export default class geolocation extends Component {
 	state = {
		
coordinates:[
		 
		{ latitude:28.579660, longitude:77.321110,  latitudeDelta: 0.0922,longitudeDelta: 0.0421,}]
		
	 };
	 
	 componentDidMount(){
		 this.requestLocationPermission();
	 }
requestLocationPermission = async()=> {
	if(Platform.OS ==='android'){
		var response= await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
		console.log('Android: '+response);
		if(response ==='granted'){
			this.locateCurrentPosition();
		}
	}
}


	locateCurrentPosition = () => {
		navigator.geolocation.getCurrentPosition(
 			position => {
				 console.log( JSON.stringify(position));
				 let initialPosition={
					 latitude:position.coords.latitude,
					 longitude:position.coords.longitude,
					 latitudeDelta: 0.0922,   
            longitudeDelta: 0.0421,
				 }

				this.setState({ initialPosition });
			},
			
			error => Alert.alert(error.message),
			 			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
 	};
	 onDragEnd(e) {
		this.setState(
		  {
			longtitude: e.nativeEvent.coordinate.longitude,
			latitude: e.nativeEvent.coordinate.latitude,
		  }
		);
	  }
	 sendLoc(){
		this.props.navigation.navigate('AddParking', {
			  longitude: this.state.longtitude,
			  latitude: this.state.latitude,
			});
	  }

 	render() {
 		return (
			<View style={styles.MainContainer}>  
  
			<MapView 
			provider={PROVIDER_GOOGLE} 
			ref={map=> this._map =map}
			  style={styles.mapStyle}  
			  showsUserLocation={true}  
			  zoomEnabled={true}  
			  zoomControlEnabled={true}  
			  initialRegion={  
				this.state.initialPosition
			  }>  
	  
		  
			{/* <Marker 
			draggable 
			coordinate={{ latitude:31.1471, longitude:75.3412}}  
			title={"location"}  
			description={"Parking"}  
		  />   */}
		  {this.state.coordinates.map(marker => (
    <Marker
	draggable
      coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
	  title={"location"}  
	  onDragEnd={e => this.onDragEnd(e)}
			// description={"Parking"} 
    />
  ))}

		  
		  
			  
			</MapView>  
			<View style={{flex:1}}>
				<Button title="click"  onPress={() => this.sendLoc()}>
				</Button>
			</View>

			  
		  </View>  
		);  
	  }  
	}  
 		



 const styles = StyleSheet.create({
 	  
	MainContainer: {  
		position: 'absolute',  
		top: 0,  
		left: 0,  
		right: 0,  
		bottom: 0,  
		alignItems: 'center',  
		justifyContent: 'flex-end',  
	  },  
	  mapStyle: {  
		position: 'absolute',  
		top: 0,  
		left: 0,  
		right: 0,  
		bottom: 0,  
	  },  
	});  