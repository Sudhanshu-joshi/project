import 'react-native-gesture-handler';
import * as React from 'react';
import {Text,View,Image,TouchableOpacity} from'react-native';

import {NavigationContainer} from '@react-navigation/native';
 import Drawer from './Drawer';
 import Push from './Pushcontroll'


class App extends React.Component{
  render(){
    return(
    <NavigationContainer>
       
      <Drawer/>
       <Push/> 
    </NavigationContainer>
    

  
    )
  }
}

export default App;

