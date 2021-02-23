import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from 'cryptoTracker/src/res/Colors';
import Storage from 'cryptoTracker/src/libs/storage'
import CoinsItem from 'cryptoTracker/src/components/coins/CoinsItem'

class FavoritesScreen extends Component{

    state = {
        favorites: []
    }

    getFavorites = async () =>{
        try {
            const allKeys = await Storage.instance.getAllKeys();
            //filter keys
            const keys = allKeys.filter((key) => key.includes("favorite-"))
            
            const favs = await Storage.instance.multiGet(keys);

            const favorites = favs.map((fav) => JSON.parse(fav[1]));
            this.setState({favorites:favorites})
        } catch (error) {
            console.log(error);
        }
    }

    handlePress = (coin) =>{
        //Send rediret to coin Details
        this.props.navigation.navigate("Detail", { coin })
    }

    componentDidMount(){
        this.getFavorites()

        //reload the screen
        this.props.navigation.addListener("focus", this.getFavorites) 
    }

    componentWillMount(){
        // stop to reload the screen
        this.props.navigation.removeListener("focus", this.getFavorites)
    }

    render(){

        const { favorites } = this.state

        return(
            <View style={styles.container}>
                { favorites.length == 0 ?
                    <FavoritesEmptyState/>
                    :
                    <FlatList
                        data={ favorites }
                        renderItem={({item}) =>
                            <CoinsItem  
                                item={ item }
                                onPress={() => this.handlePress(item)}
                            />
                        }
                    />
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
        
    }
})

export default FavoritesScreen