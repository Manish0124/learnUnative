import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style = {styles.container}>
         <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
         </View>
         <View style={[styles.card,styles.cardTwo]}>
            <Text>green</Text>
         </View>
         <View style={[styles.card,styles.cardThree]}>
            <Text>blue</Text>
         </View>
         {/* <View style={[styles.card,styles.cardOne]}>
            <Text>red</Text>
         </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:22,
        paddingHorizontal:12,
        fontWeight:'bold',
    },
    container:{
       flex:1,
       flexDirection:'row',
       padding:5,
    },

    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:12,
    },
    cardOne:{
        backgroundColor:'red',
    },
    cardTwo:{
        backgroundColor:'green',
    },
    cardThree:{
        backgroundColor:'blue',
    },

})