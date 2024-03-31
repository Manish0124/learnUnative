import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText} >ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container} >
       <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.elevatedText}>one</Text>
       </View>
       <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.elevatedText}>two</Text>
       </View>
       <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.elevatedText}>three</Text>
       </View>
       <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.elevatedText}>5</Text>
       </View>
       <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.elevatedText}>6</Text>
       </View>
      </ScrollView>
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
        padding:8,
        flex:1,
        flexDirection:'row'
    },
    card:{
      backgroundColor:'#ffff',
        margin:8,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
    },
    elevatedCard:{
      shadowColor: "#000000",
      shadowOffset: {
        width: 3,
        height:3,
      },
      shadowOpacity:  0.22,
      shadowRadius: 2,
      elevation: 4
    },
    elevatedText:{
        color:'black',
    }

})