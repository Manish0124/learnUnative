import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginButton = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 400,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
     
        <LinearGradient  style={{
          width: '87%',
          backgroundColor: 'blue',
          padding: 18,
          alignItems: 'center',
          borderRadius: 35,
          borderWidth:3,
          borderColor:'#ffff',
          borderStyle:'solid'
         
        }}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#C7AE6C', '#F3E6C7', '#FFFFFF', '#DCBF74']}
          >
          <Text style={{fontSize:17, color:'black', fontWeight:'800', opacity:0.9 }} >Let's Get Started</Text>
        </LinearGradient>
        <LinearGradient  style={{
          marginTop:15,
          width: '87%',
          backgroundColor: 'blue',
          padding: 18,
          alignItems: 'center',
          borderRadius: 35,
          borderWidth:3,
          borderColor:'#ffff',
          borderStyle:'solid'
         
        }}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFF6BE', '#FFE0A3', '#FFA1AC'  ]}
          >
          <Text style={{fontSize:17, color:'black', fontWeight:'800', opacity:0.9 }} >Let's Get Started</Text>
        </LinearGradient>
        <LinearGradient  style={{
          marginTop:15,
          width: '87%',
          backgroundColor: 'blue',
          padding: 18,
          alignItems: 'center',
          borderRadius: 35,
          borderWidth:3,
          borderColor:'#ffff',
          borderStyle:'solid'
         
        }}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#EBD9DD', '#D8AED3' , '#9182C4' ]}
          >
          <Text style={{fontSize:17, color:'black', fontWeight:'800', opacity:0.9 }} >Let's Get Started</Text>
        </LinearGradient>
    </View>
  );
};

export default LoginButton;
