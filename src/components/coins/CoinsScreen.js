import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Pressable, StyleSheet, FlatList} from 'react-native'
import Http from 'cryptoTracker/src/libs/http';
import CoinsItem from './CoinsItem';
import Colors from 'cryptoTracker/src/res/Colors';
import CoinsSearch from './CoinsSearch'


class CoinsScreen extends Component {

    state = {
        coins: [],
        allCoins: [],
        loading: false
    }

    //Api rest
    componentDidMount = ()=>{
        this.getCoins();
    }

    getCoins = async() =>{
        this.setState({ loading: true });
        //Get coins
        const request = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        //console.log("coins", request);
        this.setState({ coins: request.data})
        this.setState({ allCoins: request.data})

        this.setState({ loading: false }); 
   
    }

    handleSearch = (query)=>{
        const { allCoins } = this.state;
        query = query.toLowerCase();
        const coinsFiltered = allCoins.filter( (coin)  => {
            return coin.name.toLowerCase().includes(query) ||
            coin.symbol.toLowerCase().includes(query)
        })
        this.setState({ coins: coinsFiltered })
    }

    handlePress = (coin) =>{
        console.log("Go to details", this.props)
        //Move to other Screen navigate('name in the Stack')
        this.props.navigation.navigate('Detail', {coin})
    }

    render() {
        const {coins, loading} = this.state;
        
        return (
            <View style={styles.container}>
                <CoinsSearch onChange={this.handleSearch}/>
                { loading ? 
                    <ActivityIndicator color="#fff"
                    size="large" style={styles.loader}/>
                    :null
                }
                <FlatList
                data = {coins}
                renderItem={({ item }) => 
                <CoinsItem 
                item={item}
                 onPress={() =>this.handlePress(item)}/>
                }
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
        
    },
    titleText:{
        color: "#fff",
        textAlign:"center",
        fontSize: 30
    },
    btn: {
        padding:8,
        backgroundColor:"green",
        borderRadius: 8,
        margin: 16
    },
    btnText:{
       color: "#fff",
       textAlign: "center"
    },
    loader:{
        
        marginTop: 60 
    }
    
});

export default CoinsScreen;
