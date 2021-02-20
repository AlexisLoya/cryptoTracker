import React from 'react'; // simpre 
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen'; //import Screen

const Stack = createStackNavigator();

const CoinsStack = () =>{

    return (
        //Contenedor padre
        <Stack.Navigator>

<Stack.Screen
        name="Coins"
        component={CoinsScreen}
      />

        </Stack.Navigator>
    );
}


export default CoinsStack