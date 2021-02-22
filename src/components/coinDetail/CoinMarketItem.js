import React from 'react';
import { View, Text, Image, StyleSheet, SectionList, FlatList } from 'react-native';
import Colors from 'cryptoTracker/src/res/Colors';
import CoinDetailScreen from './CoinDetailsScreen';


const CoinMarketItem = ({item }) =>{

    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(0,0,0,0.1)",
        borderColor: Colors.zircon,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems: "center"
    },
    nameText:{
        color: "#fff",
        fontWeight: "bold"
    },
    priceText:{
        color: "#fff"
    }
})

export default CoinMarketItem;