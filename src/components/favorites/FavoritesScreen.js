import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Pressable, StyleSheet, FlatList} from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from 'cryptoTracker/src/res/Colors';


class FavoritesScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <FavoritesEmptyState/>
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