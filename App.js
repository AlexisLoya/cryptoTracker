import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { NavigationContainer }from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack'
import FavoritesStack from './src/components/favorites/FavoritesStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from 'cryptoTracker/src/res/Colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    //Contenedor 
    <NavigationContainer>
      <Tabs.Navigator 
        tabBarOptions={{
          tintColor: "#fefefe",
          style:{
            borderTopWidth: 0,
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/bank.png')}
              />
            )
          }}
        />
         <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/star.png')}
              />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bankIcon:{

  }
});
export default App;