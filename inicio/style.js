import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
            color: '#000',
        },
        image: {
            width: '100%',
            height: '90%',
        },
        inc: {
            flex: 1,
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: '#000000',
            fontWeight: 'bold'
        },
        botao: {
            width: '30vw',
            height: '5vh',
            backgroundColor: 'aquamarine',
            marginTop: '1%',
            alignItems: 'center',
            justifyContent : 'center',
            border: '1px solid #000',
            fontWeight: 'bold'
        }
    }
);