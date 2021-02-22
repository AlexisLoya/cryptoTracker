import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen'; //import CoinDetails
import Colors from 'cryptoTracker/src/res/Colors';

const Stack = createStackNavigator();

const FavoritesStack = () =>{

    return (
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
             name="Favorites"
             component={FavoritesScreen}
            />

        </Stack.Navigator>
    )
}

export default FavoritesStack;