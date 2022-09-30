import { StyleSheet, View, Text } from 'react-native'
import React from 'react';

//Navigation des différentes views.
//Importation de la navigationContainer.

import { NavigationContainer } from '@react-navigation/native';
//importation de la createNativeStackNavigator.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';

// création de la constance stack.
const Stack= createNativeStackNavigator();

//création function Screen_A
function Screen_A({navigation}){

  //CREATION DE LA CONSTANCE OnPressHandler
  const onPressHandler=()=>{
 navigation.navigate('Screen_B');
  }

  return(
    /*création du style de la views et du texte. */
 <View style={styles.body}>
    <Text style={styles.text}>
    Screen A
    </Text>

    {/* Création du bouton Pressable ET DU STYLE*/}
    <Pressable 
    onPress={onPressHandler}
    style={({pressed})=>({backgroundColor:pressed?'#ddd':'#0f0'})}
    >
     <Text style={styles.text}>
     Go to Screen B
     </Text>
    </Pressable>

 </View>
  )
}

function Screen_B(navigation){

//CREATION DE LA CONSTANCE OnPressHandler
 const onPressHandler=()=>{
//navigation.navigate('Screen_A');

//création de la navigation goBack.
navigation.goBack();
 }

  return(
 <View style={styles.body}>
    <Text style={styles.text}>
    Screen B
    </Text>

{/* Création du bouton Pressable ET DU STYLE*/}
    <Pressable 
    onPress={onPressHandler}
    style={({pressed})=>({backgroundColor:pressed?'#ddd':'#0f0'})}
    >
     <Text style={styles.text}>
     Go Back to  Screen A
     </Text>
    </Pressable>

 </View>
  )
}

// création de la fonction App

  

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
       component={Screen_A}

       /*création de l'option. */ 
       options={{
        header:()=> null
       }}
       />
      
       {/*création de la Stack.Screen B */}
       <Stack.Screen 
       name="Screen_B" 
       component={Screen_B}
       />

     </Stack.Navigator>
    </NavigationContainer>
  )
}

//création de la constance du style.

const styles=StyleSheet.create({
  body:{
     flex:1,
     justifyContent:'center',
     alignContent:'center',
  },
  /* Création du style du texte. */
  text:{
    fontSize :40,
    fontWeight:'bold',
    margin:10,

  }
})

export default App