import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SectionList, FlatList } from 'react-native';
import Colors from 'cryptoTracker/src/res/Colors';
import Http from 'cryptoTracker/src/libs/http'
import CoinMarketItem from './CoinMarketItem'


class CoinDetailScreen extends Component {

    state = {
        coin: {},
        markets: []
    }

    getSymbolIcon = (coinNameId) => {
        if (coinNameId) {
            console.log("img:", coinNameId);
            return `https://c1.coinlore.com/img/16x16/${coinNameId}.png`;
        }
    }

    getSections = (coin) => {

        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];

        return sections;
    }

    getMarkets = async(coinId) =>{
        const url= `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const markets = await Http.instance.get(url);
        this.setState({ markets })
    }

    componentDidMount() {
        console.log("coin", this.props.route.params);
        const { coin } = this.props.route.params;
        // Set value of the coin
        this.setState({ coin })
        //Change title header
        this.props.navigation.setOptions({ title: coin.symbol })
        //get markets
        this.getMarkets(coin.id)
    }
    render() {
        const { coin, markets } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image
                        style={styles.iconImg}
                        source={{ uri: this.getSymbolIcon(coin.nameid) }}
                    />
                    <Text style={styles.titleText}>{coin.name}</Text>
                </View>
                <SectionList
                    style={styles.section}
                    sections={this.getSections(coin)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) =>
                        <View style={styles.sectionItem}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) =>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}>{section.title}</Text>
                        </View>
                    }
                />
                <Text style={styles.marketsTitle}>Markets</Text>
                <FlatList
                    style={styles.list}
                    horizontal= {true}
                    data={markets}
                    renderItem={({ item }) => <CoinMarketItem item={ item }/>}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    row: {
        flexDirection: "row"
    },
    subHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        flexDirection: "row",
        
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 8
    },
    iconImg: {
        width: 25,
        height: 25
    },
    list: {
        maxHeight: 100,
        paddingLeft: 16
    },
    sectionHeader: {
        backgroundColor: "rgba(0,0,0, 0.2)",
        padding: 8
    },
    sectionItem: {
        padding: 8
    },
    itemText: {
        color: Colors.white,
        fontSize: 14
    },
    section:{
        maxHeight: 220
    },
    sectionText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "bold"
    },
    marketsTitle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center"
    },
    btnFavorite: {
        padding: 8,
        borderRadius: 8
    },
    btnFavoriteText: {
        color: Colors.white
    },
    btnFavoriteAdd: {
        backgroundColor: Colors.picton
    },
    btnFavoriteRemove: {
        backgroundColor: Colors.carmine
    }
});


export default CoinDetailScreen;