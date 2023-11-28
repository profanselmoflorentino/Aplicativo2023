import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Telaprincipal({ navigation }){
  return (
  <View>
      <Button title="Pagina 1" onPress={() => navigation.navigate('pagina1')} />
      <Button title="Pagina 2" onPress={() => navigation.navigate('pagina2')} />
      <Button title="Pagina 3" onPress={() => navigation.navigate('pagina3')} />

      
 </View>
  );
}

function Pagina1(){
  return(
     <View>
          <Text>Está é a pagina 1</Text>
     </View>
  );
}

function Pagina2(){
  return(
     <View>
          <Text>Paginaaaaaa 2</Text>
     </View>
  );
}

function Pagina3(){
  return(
     <View>
          <Text>Paginaaa 3</Text>
     </View>
  );
}
const Telas = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
<Telas.Navigator initialRouteName="Home">

<Telas.Screen name="Home" component={Telaprincipal} 
options={{title: 'Meu APP ...'}} />

<Telas.Screen name="pagina1" component={Pagina1} 
options={{title: 'Welcome'}} />

<Telas.Screen name="pagina2" component={Pagina2} 
options={{title: 'Welcome'}} />

<Telas.Screen name="pagina3" component={Pagina3} 
options={{title: 'Welcome'}} />
          
</Telas.Navigator>
</NavigationContainer>
  );
}






