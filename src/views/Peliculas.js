import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from '../components/Carousel';
import ModalView from '../components/ModalView';
import Preview from '../components/Preview';


const peliculas = {
    comedia: [
        {
            id: 1,
            nombre: 'Un espia y medio',
            img: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGX0S31L3/image?locale=es-es&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg',
            trailer: "Y_QsbgfNp6g/hqdefault.jpg",
            anio: 2016
        },
        {
            id: 2,
            nombre: 'Un novato en apuros',
            img: 'https://static.wikia.nocookie.net/doblaje/images/b/ba/UNEAPosterLA.jpg/revision/latest?cb=20201107205147&path-prefix=es',
            trailer: 'nKFHYcHnQVQ/hq720.jpg',
            anio: 2014
        },
        {
            id: 3,
            nombre: 'Bad Boys para siempre',
            img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cfc277781c35a9bbc6380f7cad976f757a2b556899d631821283838a6bc63756._RI_V_TTW_.jpg',
            trailer: 'Amzj7xll3Aw/hq720.jpg',
            anio: 2020
        },
        {
            id: 4,
            nombre: 'Jumanji: el siguiente nivel',
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jumanji-siguiente-nivel-dvd-blu-ray-1587994970.jpg',
            trailer: 'YOpySpo2Kig/hq720.jpg',
            anio: 2019
        },
        {
            id: 5,
            nombre: 'Mi Villano Favorito',
            img: 'https://es.web.img3.acsta.net/pictures/14/04/30/09/42/037008.jpg',
            trailer: 'EFk15rVh5cE/hqdefault.jpg',
            anio: 2010
        },
        {
            id: 6,
            nombre: 'Space Jam: A New Legacy',
            img: 'https://wvw.ssoap2day.to/uploads/posts/2021-07/4c6757213899bdaf741741929d2c7b99_image.jpg',
            trailer: 'z7PSyWuArVQ/hq720.jpg',
            anio: 2013
        },
    ],
    romance: [
        {
            id: 1,
            nombre: 'Bajo la misma estrella',
            img: 'https://es.web.img3.acsta.net/pictures/14/02/05/16/10/034641.jpg',
            trailer: "KiFGEwueNFU/hqdefault.jpg",
            anio: 2014
        },
        {
            id: 2,
            nombre: 'Yo antes de ti',
            img: 'https://clarovideocdn9.clarovideo.net/PELICULAS/MEBEFOREYOU/EXPORTACION_WEB/SS/MEBEFOREYOUWVERTICAL.jpg?size=200x300',
            trailer: 'J-lcPRmI6jY/hq720.jpg',
            anio: 2016
        },
        {
            id: 3,
            nombre: 'After. Aquí empieza todo',
            img: 'https://www.ecured.cu/images/e/e6/Afterpelicula.jpg',
            trailer: 'aio2CG_9ir0/hq720.jpg',
            anio: 2019
        },
        {
            id: 4,
            nombre: 'Y nadie más que tú',
            img: 'https://s.movieinsider.com/images/p/487545_m1518061918.jpg',
            trailer: 'LKnQVCCX8vU/hqdefault.jpg',
            anio: 2018
        },
        {
            id: 5,
            nombre: 'Violet y Finch',
            img: 'https://es.web.img2.acsta.net/pictures/20/02/07/09/27/1987472.jpg',
            trailer: 'PTrN2pxwo4M/hq2.jpg',
            anio: 2020
        },
        {
            id: 6,
            nombre: 'En la misma ola',
            img: 'https://www.verpeliculaonline.org/movies/static/img/w300/mllO4lFsUVSUyTS3HiiidXDPkpB.jpg',
            trailer: 'QEYJUKL0gwE/hq2.jpg',
            anio: 2021
        },
    ],
    accion: [
        {
            id: 1,
            nombre: 'Rápidos y furiosos 6',
            img: 'https://metropolisanluis.com/wp-content/uploads/2013/05/rapido-y-furioso-6-poster-oficial.jpg',
            trailer: "h21C_UlOryw/hq720.jpg",
            anio: 2013
        },
        {
            id: 2,
            nombre: 'Bloodshot',
            img: 'https://play-lh.googleusercontent.com/2bcW7PFYrxR2hIBJd_CH0ahr3VBFgyGSE77SzlRaRtk3CN1iHpCdGvF8Lb2FwdovHx2EUXSGaT7Ao4RGI8g',
            trailer: 'zOeEPSR2OSM/hq720.jpg',
            anio: 2020
        },
        {
            id: 3,
            nombre: 'Rampage: devastación',
            img: 'https://mx.web.img2.acsta.net/pictures/18/04/04/23/17/0459295.jpg',
            trailer: 'pDTrssraPKM/hq720.jpg',
            anio: 2018
        },
        {
            id: 4,
            nombre: 'Bad Boys para siempre',
            img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cfc277781c35a9bbc6380f7cad976f757a2b556899d631821283838a6bc63756._RI_V_TTW_.jpg',
            trailer: 'Amzj7xll3Aw/hq720.jpg',
            anio: 2020
        },
        {
            id: 5,
            nombre: 'Cath the Bullet',
            img: 'https://wvw.ssoap2day.to/uploads/posts/2021-09/8dbe21aa27a62f0c6cbe1b631c4b24be_image.jpg',
            trailer: 'NVGTyCWkejg/hq720.jpg',
            anio: 2021
        },
        {
            id: 6,
            nombre: 'Venom',
            img: 'https://static.wikia.nocookie.net/marveldatabase/images/a/ae/Venom_%28film%29_poster_009.jpg/revision/latest?cb=20180917165250',
            trailer: 'F4Ygcigj0Gk/hq720.jpg',
            anio: 2018
        },
    ]
}

const Peliculas = () => {

    const [ preview, setPreview ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <View style={{backgroundColor:'#000814'}}>
            <Preview previewVideo = { preview  } setModalVisible = { setModalVisible } />
            
            <SafeAreaView style = {{ height: '65%' }}>
                <ScrollView>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Comedia</Text>
                        <Carousel data = { peliculas.comedia } setPreview = { setPreview }/>
                    </View>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Romance</Text>
                        <Carousel data = { peliculas.romance } setPreview = { setPreview }/>
                    </View>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Acción</Text>
                        <Carousel data = { peliculas.accion } setPreview = { setPreview }/>
                    </View>
                </ScrollView>
            </SafeAreaView>

            { preview === '' ? (
                null
            ):(
                <ModalView modalVisible = { modalVisible } setModalVisible = { setModalVisible } preview = { preview } />
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        backgroundColor:'#001d3d'
    },
    clasificacion: {
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 5,
        color: 'white',
    },
})

export default Peliculas;