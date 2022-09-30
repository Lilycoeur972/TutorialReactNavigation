import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
// importation de Pressable.
import { Pressable } from 'react-native';


 function Screen_B(navigation){

    //CREATION DE LA CONSTANCE OnPressHandler
     const onPressHandler=()=>{
    navigation.navigate('Screen_A');
    
    //création de la navigation goBack.
//    navigation.goBack();
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
export default Screen_B