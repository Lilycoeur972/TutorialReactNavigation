import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
// importation de Pressable.
import { Pressable } from 'react-native';

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

  export default Screen_A