import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import Colors from 'cryptoTracker/src/res/Colors';

const CoinsItems = ({ item }) => {

    getArrow = () => {
        if(item.percent_change_1h > 0) return require("cryptoTracker/src/assets/arrow_up.png");
        else return require("cryptoTracker/src/assets/arrow_down.png");
    }

    return (
        <View style={style.container}>
            <View style={style.row}>
                <Text style={style.symbolText}>{item.symbol}</Text>
                <Text style={style.nameText}>{item.name}</Text>
                <Text style={style.priceText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={style.row}>
                <Text style={style.percentText}>{item.percent_change_1h}</Text>
                <Image
                    style={style.imageArrow}
                    source={getArrow()}
                />
            </View>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
        marginLeft:  Platform.OS === 'ios' ? 16 : 0
    },
    row:{
        flexDirection: "row",
    },
    symbolText:{
        fontWeight: "bold",
        fontSize: 16,
        color:"#fff",
        marginRight: 12
    },
    nameText:{
        color: "#fff",
        fontSize: 14,
        marginRight: 16
    },
    priceText:{
        color: "#fff",
        fontSize: 14
    },
    percentText:{
        color: "#fff",
        fontSize: 12,
        marginRight: 8
    },
    imageArrow:{
        width: 20,
        height: 15
    }

});
export default CoinsItems;