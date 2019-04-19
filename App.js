import React ,{ Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';

export default class App extends Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <ImageBackground 
                source={{uri:'https://instagram.ffor13-1.fna.fbcdn.net/vp/928d9129d5f9cfd9d21ed5a800421023/5D4A1A76/t51.2885-15/e35/54731886_190552831914496_7858658238123479450_n.jpg?_nc_ht=instagram.ffor13-1.fna.fbcdn.net'}}
                style={{width:'100%', height: '100%'}}
            >
                <View style={styles.container}>
                    <View style={styles.welcome}>
                        <Text style={styles.fonte}>Bem vindo</Text>
                        <Text style={styles.fonte}>ao nosso casamento</Text>
                        <TouchableHighlight 
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Loading')} 
                        >
                            <Text style={styles.buttonText}>ENTRAR</Text>
                        </TouchableHighlight> 
                    </View>
                </View>
            </ImageBackground>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "rgba(79, 60, 45, 0.3)", 
        justifyContent:"flex-end",
    },
    welcome:{
        marginBottom: 70
    },  
    fonte:{ 
        fontFamily: 'Dancing Script Bold',
        fontSize: 48,
        textAlign: "center",
        lineHeight: 48,
        color: "#fff",
    },
    button:{
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        alignSelf:"center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText:{
        color: "rgba(79, 60, 45, 1)",
        fontSize: 26,
        textAlign:"center",
        fontFamily: "Raleway ExtraBold",
    }
});