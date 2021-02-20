import React, { Component } from 'react'
import { View, Text, Pressable, StyleSheet} from 'react-native'


class CoinsScreen extends Component {

    handlePress = () =>{
        console.log("Go to details", this.props)
        //Move to other Screen navigate('name in the Stack')
        this.props.navigation.navigate('Detail')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Coins Screen</Text>
                <Pressable onPress={this.handlePress} style={styles.btn}>
                    <Text style={styles.btnText}>Go to Detail</Text>
                    </Pressable>
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
    }
});

export default CoinsScreen;
