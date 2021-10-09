import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Estrenos from '../views/Estrenos';
import Series from '../views/Series';
import Peliculas from '../views/Peliculas';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer styles={styles.container}>
            <Tab.Navigator>
                <Tab.Screen 
                    name = 'Peliculas' 
                    component = { Peliculas } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'movie' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Series' 
                    component = { Series } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'tv' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Estrenos' 
                    component = { Estrenos } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'grade' size= { size } color = { color } />
                        ) 
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffc300'
    }
})

export default Navigation;