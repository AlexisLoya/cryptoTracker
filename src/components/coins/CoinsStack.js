import React from 'react' // simpre
import { createStackNavigator } from '@react-navigation/stack'

import CoinsScreen from './CoinsScreen'; //import CoinsScreen
import CoinDetailScreen from './CoinDetailsScreen'; //import CoinDetails
import Colors from 'cryptoTracker/src/res/Colors';

const Stack = createStackNavigator();

const CoinsStack = () => {

    return (
        //Contenedor padre
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: Colors.blackPearl,
              shadowColor: Colors.blackPearl
            },
            headerTintColor: Colors.red
          }
          }
        >

            <Stack.Screen
             name="Coins"
             component={CoinsScreen}
            />

            <Stack.Screen
            name="Detail"
            component={CoinDetailScreen}
            />

        </Stack.Navigator>
    );
}


export default CoinsStack;
