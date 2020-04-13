import 'react-native-gesture-handler';
import * as React from 'react';
import {Text,View} from'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import login from './login';
import Signin from './Signin';
import UserProfile from './UserProfile';


const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
function App() {
  return (
//      <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="login" component={login} />
//        </Stack.Navigator>
//      </NavigationContainer>
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Text>app</Text>
//       </View>
//     )
//   }
// }
<NavigationContainer>
<Stack.Navigator
screenOptions={{
headerStyle: {
  backgroundColor:'#37bfbf',
},
headerTintColor: '#fff',
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
  header:()=>(null)}}/>
<Stack.Screen name="UserProfile" component={UserProfile}
options={{
  headerLeft :()=>(null)}}/>
   </Stack.Navigator>
      </NavigationContainer>
  );
  }
export default App;
