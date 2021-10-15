import React from "react";
import { View, TouchableOpacity, Button, Text, ImageBackground } from "react-native";
import styles from './style.js'
{/*import ima from './assets/qq.jpg'*/ }
const image = { uri: "https://images-na.ssl-images-amazon.com/images/I/71k5kfdB9KL.png" }

export default function Inicio({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.inc}>
                    Questionário sobre jogos!! Divirta-se e mostre o seu tempo perdido
                </Text>
            </ImageBackground>
            <TouchableOpacity style={styles.botao}
                onPress={
                    () => {
                        navigation.navigate('Page1')
                    }
                }>Inicie o quiz
            </TouchableOpacity>
        </View>
    );
}