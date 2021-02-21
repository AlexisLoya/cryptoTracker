
import React from 'react'
import { NavigationContainer }from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack'


const App = () => {
  return (
    //Contenedor 
    <NavigationContainer>
      <CoinsStack />
    </NavigationContainer>
  );
};


export default App;
