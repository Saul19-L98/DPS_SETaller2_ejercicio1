import React from 'react';
import { View, Image, TouchableHighlight, StyleSheet, Text } from 'react-native';

const Preview = ({ setModalVisible, previewVideo }) => {

    return(
        <View style = { styles.containerVideo }>
            {
                previewVideo === '' ? (
                    <View style = {styles.containerText}>
                        <Text style = {styles.textoInicial}>Seleccione una película o serie para la vista previa</Text>
                    </View>
                ) : (
                    <TouchableHighlight
                        onPress = { () => setModalVisible(true) }
                        underlayColor="white"
                    >
                        <Image
                            style = { styles.video } 
                            source={{ uri: `https://i.ytimg.com/vi/${previewVideo}` }} 
                        />
                    </TouchableHighlight>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerVideo: {
        width: '100%',
        height: '35%',
    },
    video: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    containerText:{ 
        display: 'flex', 
        justifyContent: 'center', 
        height: '100%', 
        marginHorizontal: '5%' 
    },
    textoInicial:{ 
        textAlign: 'center', 
        fontSize: 20,
        color: 'white',
    }
})

export default Preview;