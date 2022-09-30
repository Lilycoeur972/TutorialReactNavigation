import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import ScreenA from './Screen/ScreenA';
import ScreenB from './Screen/ScreenB';

//Navigation des différentes views.
//Importation de la navigationContainer.

import { NavigationContainer } from '@react-navigation/native';
//importation de la createNativeStackNavigator.
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



/* création de la constance stack.
const Stack= createNativeStackNavigator();*/

const Tab = createBottomTabNavigator();



// création de la constance  App

const App = () => {
  return(

    //création de la NavigationContainer
    <NavigationContainer>

      {/*création de la Stack.Navigator. */}
     <Stack.Navigator

      /* création de screenOptions*/
      /*screenOptions={{
        header:()=> null
      }} */
     >
     
      {/*création de la Stack.Screen A */}
       <Stack.Screen 
       name="Screen_A" 
       component={ScreenA}

       /*création de l'option. */ 
       options={{
        header:()=> null
       }}
       />
      
       {/*création de la Stack.Screen B */}
       <Stack.Screen 
       name="Screen_B" 
       component={ScreenB}
       />

     </Stack.Navigator>
    </NavigationContainer>
    
  )
}
 


export default App