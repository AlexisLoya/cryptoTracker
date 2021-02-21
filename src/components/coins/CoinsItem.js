import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CoinsItems = ({ item}) =>{
    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.symbol}</Text>
        </View>                
                
    );
}

export default CoinsItems;