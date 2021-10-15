import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
            color: '#000',
            backgroundColor: '#A9A9A9',
            
        },
        texto: {
            fontSize: '25px',
            fontWeight: 'bold',

        },
        img:{
            width: '100vw',
            height: '50vh',
            border: '1px solid #000'
        },
        perg:{
            backgroundColor: '#4169E1',
            borderRadius: '5vw',
            fontSize: '19px',
            marginTop: '25px',
            marginBottom: '20px',
            padding: '5px',
            fontWeight: 'bold',
            border: '1px solid #000'
        },
        botao:{
            width: '25vw',
            height: '4vh',
            backgroundColor: '#4169E1',
            marginTop: '0.2%',
            alignItems: 'center',
            justifyContent : 'center',
            border: '1px solid #000',
            borderRadius: '0.5vw',
            fontWeight: 'bold'
        }
    }
);