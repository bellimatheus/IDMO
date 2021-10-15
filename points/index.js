import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Animated, ImageBackground} from "react-native";
import styles from "./style.js";

const image = {uri: "https://thumbs.dreamstime.com/z/resultados-de-la-escritura-43577259.jpg"};

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 5,
                duration: 10000,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}



export default function Points({ route, navigation }) {
    var data = route.params;
    if (data[2]) {
        data[0]++;
    } else {
        data[1]++;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.img}>
                <FadeInView>
                    <Text style={styles.placa}>Placar de Pontos</Text>
                </FadeInView>
                <FadeInView style={{width: 250, height: 50}}>
                    <Text style={styles.pont}>Acerto(s): {data[0]}</Text>
                    <Text style={styles.pont}>Erro(s): {data[1]}</Text>
                </FadeInView>

                <FadeInView>
                    <TouchableOpacity style={styles.bot}
                        onPress={() => { navigation.navigate('Inicio') }}>
                        Tela de inicio
                    </TouchableOpacity>
                </FadeInView>
            </ImageBackground>

        </View>
    );
}