import React, { Fragment } from "react";

import { StatusBar, SafeAreaView,View,StyleSheet,Text,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Imagem() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{fontSize:20,marginBottom:15}}>Minha situação no fim do periodo</Text>
      <Image
        style={{}}
        source={require('./stuff/tired.jpeg')}
      />
    </View>
  );
};

export default Imagem;