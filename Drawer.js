import 'react-native-gesture-handler';
import * as React from 'react';
import {Text,View,Image,TouchableOpacity,Alert,BackHandler,Dimensions} from'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
  // import {NavigationContainer} from '@react-navigation/native';
   import {createStackNavigator} from '@react-navigation/stack';
  //  import { NavigationActions ,StackActions} from '@react-navigation/native'
 import SplashScreen from './SplashScreen';
 import login from './login';
 import Signin from './Signin';
 import UserProfile from './UserProfile';
import AddParking from './AddParking';
import Booking from './Booking';
import geolocation from './geolocation';
 import ShowParking from './ShowParking';
//  import BookingHistory from './BookingHistory';
 import Slots from './Slots';

 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
 


const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();
 const Screens=()=>{
   return(
   

    <Stack.Navigator
screenOptions={{
    headerStyle: {
      backgroundColor: '#36cfbf',
    },
    headerTintColor: '#005580',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}

>
<Stack.Screen name="SplashScreen" component={SplashScreen} 
     options={{
      header:()=>(null)}}/>
     <Stack.Screen name="login" component={login} 
     options={{
      header:()=>(null)}}/>
     
    <Stack.Screen name="Signin" component={Signin}
    options={{
      header:()=>(null)}}
   
     />
      <Stack.Screen name="UserProfile" component={UserProfile}
     options={{
       header:()=>(null)}}
    
     />
      <Stack.Screen name="ShowParking" component={ShowParking}
      options={{
        header:()=>(null)}}
    
    />
     <Stack.Screen name="Slots" component={Slots}
     options={{
       header:()=>(null)}}/>
       <Stack.Screen name="Booking" component={Booking}
     options={{
       header:()=>(null)}}/>
       {/* <Stack.Screen name="BookingHistory" component={BookingHistory}
     options={{
       header:()=>(null)}}/> */}
    </Stack.Navigator>

   )
 }
 
export default ()=>{
  return(
    
    <Drawer.Navigator initialRouteName="SplashScreen"
      drawerStyle={{
        backgroundColor:'#36cfbf',
        color: 'white',
        width: 250,
      
     
      }}>
    
     
      
      <Drawer.Screen
        name="Screens"
        component={Screens}
        options={{ drawerLabel: 'Screens' }}
      />
        
      
         
       <Drawer.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ drawerLabel: 'UserScreen' }}
      />  
      <Drawer.Screen
        name="ShowParking"
        component={ShowParking}
        options={{ drawerLabel: 'ShowParking' }}
      /> 
       {/* <Drawer.Screen
        name="Slots"
        component={Slots}
        options={{ drawerLabel: 'Slots' }}
      />
      <Drawer.Screen
        name="Booking"
        component={Booking}
        options={{ drawerLabel: 'Booking' }}
      />  */}
      {/* <Drawer.Screen
        name="BookingHistory"
        component={BookingHistory}
        options={{ drawerLabel: 'Booking History' }}
      /> */}
    </Drawer.Navigator>
    
//     <Stack.Navigator
// screenOptions={{
//     headerStyle: {
//       backgroundColor: '#36cfbf',
//     },
//     headerTintColor: '#005580',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }}

// >
// <Stack.Screen name="SplashScreen" component={SplashScreen} 
//      options={{
//       header:()=>(null)}}/>
//      <Stack.Screen name="login" component={login} 
//      options={{
//       header:()=>(null)}}/>
     
//     <Stack.Screen name="Signin" component={Signin}
//     options={{
//       header:()=>(null)}}
   
//      />
//      <Stack.Screen name="UserProfile" component={UserProfile}
//      options={{
//        header:()=>(null)}}
    
//      />
//      <Stack.Screen name="ShowParking" component={ShowParking}
//      options={{
//        header:()=>(null)}}
    
//      />
//      <Stack.Screen name="Slots" component={Slots}
//      options={{
//        header:()=>(null)}}/>
//        <Stack.Screen name="Booking" component={Booking}
//      options={{
//        header:()=>(null)}}/>
//        <Stack.Screen name="BookingHistory" component={BookingHistory}
//      options={{
//        header:()=>(null)}}/>
//     </Stack.Navigator>
    
  
  
  );

    



  
}

