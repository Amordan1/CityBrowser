import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={art}></Image>
    </View>
  );
}
function MileScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={mile}></Image>
    </View>
  );
}
function PierScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={pier}></Image>
    </View>
  );
}
function WaterScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={water}></Image>
    </View>
  );
}
function WillisScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={willis}></Image>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}
        options={{ headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        title: "Art Institute of Chicago"}} />
        <Drawer.Screen name="Mile" component={MileScreen}
        options={{ headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        title: "Magnificent Mile"}} />
        <Drawer.Screen name="Pier" component={PierScreen}
        options={{ headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        title: "Navy Pier"}} />
        <Drawer.Screen name="Water" component={WaterScreen}
        options={{ headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        title: "Water Tower"}} />
        <Drawer.Screen name="Willis" component={WillisScreen}
        options={{ headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        title: "Willis Tower"}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    height: 480,
    width: 320
  }
});