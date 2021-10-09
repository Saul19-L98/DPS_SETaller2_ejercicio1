import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, SectionList, TouchableHighlight } from 'react-native';
import Preview from '../components/Preview';
import List from '../components/List';
import ModalView from '../components/ModalView';

const dataSeries = [
    {
        titulo: 'Comedia',
        data: [
            {
                id: 1,
                nombre: '(Des)encanto',
                img: 'https://static.wikia.nocookie.net/doblaje/images/1/1b/Desencanto_poster.jpg/revision/latest?cb=20180818195647&path-prefix=es',
                trailer: 'aTtinse4RWQ/hq720.jpg',
                temporadas: 3
            },
            {
                id: 2,
                nombre: 'Brooklyn Nine-Nine',
                img: 'https://1.bp.blogspot.com/-X3n6HaUQamE/WSrS4zn28zI/AAAAAAAAF6A/1fbghUy9SGgY3yTW_UssedAftmOP5jTHACLcB/s1600/brooklyn-nine-nine-poster.jpg',
                trailer: 'sEOuJ4z5aTc/hq720.jpg',
                temporadas: 8
            },
            {
                id: 3,
                nombre: 'Modern Family',
                img: 'https://www.eluniverso.com/resizer/bFUYm76_dH2bOi4tuHkSJ_9_3bM=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/JFDBNBCHE5FO3FBDNXH5XTOXHI.jpg',
                trailer: 'X0lRjbrH-L8/hqdefault.jpg',
                temporadas: 11
            },
            {
                id: 4,
                nombre: 'Bob Esponja',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-xGXXNh0TH9us9SZcz4jJ5YvKCDF-WQNaADb6G4Z3Ra7LQGXJAOkzG97vGP--_7ZV5o&usqp=CAU',
                trailer: 'BUFKUy_c5Tw/hq720.jpg',
                temporadas: 13
            },
            {
                id: 5,
                nombre: 'The Office',
                img: 'https://www.lacasadeel.net/wp-content/uploads/2021/08/615MPacH9qL._AC_SY679_.jpg',
                trailer: '3sK3Itjzh-k',
                temporadas: 9
            },
            {
                id: 6,
                nombre: 'BoJack Horseman',
                img: 'https://www.formulatv.com/images/series/posters/800/879/dest_3.jpg',
                trailer: 'i1eJMig5Ik4/hq720.jpg',
                temporadas: 6
            },
        ]
    },
    {
        titulo: 'Romance',
        data: [
            {
                id: 1,
                nombre: "Grey's Anatomy",
                img: 'https://www.terra.cl/u/fotografias/m/2021/3/24/f608x342-9085_38808_0.jpeg',
                trailer: 'q1pcpgREQ5c/hq720.jpg',
                temporadas: 18
            },
            {
                id: 2,
                nombre: '¿Hola? Soy yo',
                img: 'https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*6673*7226_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYHMg4WdjDNu5zwPGeijaMJ6985etD4z4IHTjSd2YzIZkoCz7dTqtkCY7gVaCcfScR93UhDUeTz%5D7%5Dla*8Jr9oLklyTidLSkBPmTxoXThj2b*j3DuTgJpJkxcGoDY.jpg?locale=es',
                trailer: 'OtiD6ww1yeE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 3,
                nombre: 'Bridgerton',
                img: 'https://i.blogs.es/e4a6cd/cartel-los-bridgerton/1366_2000.jpeg',
                trailer: 'gpv7ayf_tyE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 4,
                nombre: 'Amor en la ciudad',
                img: 'https://www.fiebreseries.com/wp-content/uploads/2021/02/Amor-en-la-ciudad_poster_serie0-592x381.jpg',
                trailer: 'IdFAiDgmRuA/hqdefault.jpg',
                temporadas: 1
            },
            {
                id: 5,
                nombre: 'Hotel del Luna',
                img: 'https://static.wixstatic.com/media/6adfa9_1fe99d574a5f4ac4a9e261743e32d93c~mv2.jpg/v1/fill/w_514,h_676,al_c,lg_1,q_90/6adfa9_1fe99d574a5f4ac4a9e261743e32d93c~mv2.webp',
                trailer: 'lJ3_1v8sB48/hqdefault.jpg',
                temporadas: 1
            },
            {
                id: 6,
                nombre: 'Start-Up',
                img: 'https://pilartrinidad.com/wp-content/uploads/2020/12/Start-up-drama.jpg',
                trailer: 'eCDeNtxSKvE/hq720.jpg',
                temporadas: 1
            },
        ]
    },
    {
        titulo: 'Acción',
        data: [
            {
                id: 1,
                nombre: 'the witcher',
                img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-witcher-temporada-2-poster-1625917732.jpg?resize=768:*',
                trailer: '7snHc-_gm30/hq720.jpg',
                temporadas: 2
            },
            {
                id: 2,
                nombre: 'Invincible',
                img: 'https://plataformas.news/online/nota_invincible-se-estrenara-el-26-de-marzo-en-amazon-prime-video.jpg',
                trailer: '-bfAVpuko5o/hq720.jpg',
                temporadas: 1
            },
            {
                id: 3,
                nombre: 'The Boys',
                img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-boys-amazon-serie-heroes-1558019923.jpg',
                trailer: 'MN8fFM1ZdWo/hq720.jpg',
                temporadas: 2
            },
            {
                id: 4,
                nombre: 'CSI: Miami',
                img: 'https://vader.news/__export/1617774147700/sites/gadgets/img/2021/04/07/csi_miami_3.jpeg_1482777527.jpeg',
                trailer: 'S6P05pCVtuU/hqdefault.jpg',
                temporadas: 10
            },
            {
                id: 5,
                nombre: 'Star Wars: La guerra de los clones',
                img: 'https://www.gamerfocus.co/wp-content/uploads/2020/11/clone-wars.jpg',
                trailer: '3CJUjxfQagA/hq720.jpg',
                temporadas: 7
            },
            {
                id: 6,
                nombre: 'Agentes de S.H.I.E.L.D.',
                img: 'https://es.web.img2.acsta.net/newsv7/19/07/31/10/17/0561433.jpg',
                trailer: 'T3T-evQZiQo/hq720.jpg',
                temporadas: 7
            },
        ]
    }
]

const Series = () => {

    const [ previewSerie, setPreviewSerie ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <>
            <Preview previewVideo = { previewSerie } setModalVisible = { setModalVisible } />
            <SafeAreaView style = {{ height: '65%',backgroundColor:'#000814' }}>
                <SectionList 
                    sections = { dataSeries }
                    keyExtractor = { (item, index) => item + index }
                    renderItem = { ({ item }) => (
                        <TouchableHighlight
                            onPress = { () => setPreviewSerie(item.trailer) }
                            underlayColor="white"
                        >
                            <List serie = { item } />
                        </TouchableHighlight>
                    ) }
                    renderSectionHeader = { ({ section: { titulo } }) => (
                        <Text style = { styles.titulo }>{ titulo }</Text>
                    )}
                />
            </SafeAreaView>

            { previewSerie === '' ? (
                null
            ):(
                <ModalView modalVisible = { modalVisible } setModalVisible = { setModalVisible } preview = { previewSerie } />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000',
        marginVertical: 5,
        color:'white',
    },
})

export default Series;