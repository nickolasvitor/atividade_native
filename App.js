import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Imagem from './Image';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{marginBottom:15,fontSize:25}}>Cuidado para não se chocar</Text>
      <Button
        title="Ver a foto"
        onPress={() => navigation.navigate('Imagem')}
      />
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Imagem" component={Imagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;