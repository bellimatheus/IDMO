import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import styles from './style.js'
const image = {uri: "https://wallpapercave.com/wp/Pzb3zCA.jpg"}

export default function Page1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Questão 1</Text>
            <ImageBackground source={image} style={styles.img}></ImageBackground>
            <Text style={styles.perg}>Qual foi o ano de lançamento do game Call of Duty Black Ops?</Text>

            <TouchableOpacity style={styles.botao}
                onPress={
                    () => {
                        navigation.navigate('Page2', true)
                    }
                }> 9 de Novembro de 2010
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={
                    () => {
                        navigation.navigate('Page2', false)
                    }
                }> 10 de Dezembro de 2009
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={
                    () => {
                        navigation.navigate('Page2', false)
                    }
                }> 11 de Janeiro de 2011
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={
                    () => {
                        navigation.navigate('Page2', false)
                    }
                }> 8 de Outubro de 2010
            </TouchableOpacity>
        </View>
    );
}