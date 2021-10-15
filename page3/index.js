import React from "react";
import {View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from './style.js'
const image = {uri: "https://sm.ign.com/ign_br/news/g/god-of-war/god-of-war-3-remastered-coming-to-ps4_jms6.jpg"}

export default function Pag3({navigation, route}) {
    var data = route.params;
    if(data[2]){
        data[0]++;
    }else{
        data[1]++;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Questão 3</Text>
            <ImageBackground source={image} style={styles.img}></ImageBackground>
            <Text style={styles.perg}>Quantos Deuses Kratos aniquilou em God of War III?</Text>
            
            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Points', data)
                }
            }>Três
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Points', data)
                }
            }>Quatro
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Points', data)
                }
            }>Cinco
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = true;
                navigation.navigate('Points', data)
                }
            }>Mais de cinco
            </TouchableOpacity>
        </View>
    );
}