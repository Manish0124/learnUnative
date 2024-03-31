import React from "react";

import { 
    Text,
    View,
    useColorScheme,
    StyleSheet
 } from "react-native";

function AppPro(): JSX.Element{
   const isDarkMode = useColorScheme()==='dark';
      return(
      <View style={styles.container}>
        <Text style={isDarkMode?styles.whiteColor:styles.darkColor} >hii there </Text>
      </View>
      )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteColor:{
        color:'white'
    },
    darkColor:{
        color:'black'
    }
})

 export default AppPro;