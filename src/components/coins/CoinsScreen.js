import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Pressable, StyleSheet, FlatList} from 'react-native'
import Http from 'cryptoTracker/src/libs/http';
import CoinsItem from './CoinsItem';


class CoinsScreen extends Component {

    state = {
        coins: [],
        loading: false
    }

    //Api rest
    componentDidMount = async()=>{
        this.setState({ loading: true });
        const request =await Http.instance.get('https://api.coinlore.net/api/tickers/');
        //console.log("coins", request);
        this.setState({ coins: request.data})
        this.setState({ loading: false }); 
    }

    handlePress = () =>{
        console.log("Go to details", this.props)
        //Move to other Screen navigate('name in the Stack')
        this.props.navigation.navigate('Detail')
    }

    render() {
        const {coins, loading} = this.state;
        
        return (
            <View style={styles.container}>
                { loading ? 
                    <ActivityIndicator color="#fff"
                    size="large" style={styles.loader}/>
                    :null
                }
                <FlatList
                data = {coins}
                renderItem={({ item }) => 
                <CoinsItem item={item} />
                }
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "grey"
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
