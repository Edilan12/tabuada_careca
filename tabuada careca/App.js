import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView,Image } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Estilos from './css/style'
import {Tabuada2, Tabuada3, Tabuada4, Tabuada5, Tabuada6, Tabuada7, Tabuada8, Tabuada9, Tabuada10} from './screen/tabuadas'



function HomeScreen({ navigation }) {
  return (
    <View style={Estilos.container}>
      <Image style={Estilos.logo} source={require('./img/careca.png')} />
      <Text style={Estilos.paragraph}>Tabuada</Text>
      <Button
        title="Tabuada do 2"
        onPress={() => navigation.navigate('TabuadaDo2')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 3"
        onPress={() => navigation.navigate('TabuadaDo3')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 4"
        onPress={() => navigation.navigate('TabuadaDo4')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 5"
        onPress={() => navigation.navigate('TabuadaDo5')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 6"
        onPress={() => navigation.navigate('TabuadaDo6')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 7"
        onPress={() => navigation.navigate('TabuadaDo7')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 8"
        onPress={() => navigation.navigate('TabuadaDo8')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 9"
        onPress={() => navigation.navigate('TabuadaDo9')}
      />
      <Text> </Text>
      <Button
        title="Tabuada do 10"
        onPress={() => navigation.navigate('TabuadaDo10')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'APP Tabuada' }} />
          <Stack.Screen name="TabuadaDo2" component={Tabuada2} options={{ title: 'Tabuada do 2'}} />
          <Stack.Screen name="TabuadaDo3" component={Tabuada3} options={{ title: 'Tabuada do 3'}} />
          <Stack.Screen name="TabuadaDo4" component={Tabuada4} options={{ title: 'Tabuada do 4'}} />
          <Stack.Screen name="TabuadaDo5" component={Tabuada5} options={{ title: 'Tabuada do 5'}} />
          <Stack.Screen name="TabuadaDo6" component={Tabuada6} options={{ title: 'Tabuada do 6'}} />
          <Stack.Screen name="TabuadaDo7" component={Tabuada7} options={{ title: 'Tabuada do 7'}} />
          <Stack.Screen name="TabuadaDo8" component={Tabuada8} options={{ title: 'Tabuada do 8'}} />
          <Stack.Screen name="TabuadaDo9" component={Tabuada9} options={{ title: 'Tabuada do 9'}} />
          <Stack.Screen name="TabuadaDo10" component={Tabuada10} options={{ title: 'Tabuada do 10'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


