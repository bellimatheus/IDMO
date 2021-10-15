import React from "react";
import {View, ImageBackground, Text, TouchableOpacity } from "react-native";
import styles from './style.js'
const image = {uri: "https://365indies.com/wp-content/uploads/2019/11/gameawards.jpg"}


export default function Page2({navigation, route}) {
    const aqr = route.params;
    var contSOMA = 0;
    var contERR = 0;
    if(aqr){
        contSOMA++;
    }else{
        contERR++;
    }
    var data = [
        contSOMA, contERR, false
    ]



    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Questão 2</Text>
            <ImageBackground source={image} style={styles.img}></ImageBackground>
            <Text style={styles.perg}>Quem ganhou o GOTY em 2007?</Text>
            
            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = true;
                navigation.navigate('Page3', data)
                }
            }>Call of Duty 4: Modern Warfare 
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Page3', data)
                }
            }>BioShocK
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Page3', data)
                }
            }>Halo 3
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => {
                data[2] = false;
                navigation.navigate('Page3', data)
                }
            }>God of War II
            </TouchableOpacity>
        </View>
    );
}