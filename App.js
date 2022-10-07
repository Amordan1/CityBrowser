import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from './Button';
import * as WebBrowser from 'expo-web-browser';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');
const getInfo = "More Information";
const artURL = "https://www.artic.edu/";
const mileURL = "https://www.themagnificentmile.com/";
const pierURL = "https://navypier.org/";
const waterURL = "https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html";
const willisURL = "https://www.willistower.com/";


function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={art}></Image>
      <Button
      info
      onPress={() => handleButtonPress(artURL)}
      style={styles.button}
    >
      <Text>{getInfo}</Text>
    </Button>
    </View>
  );
}
function MileScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={mile}></Image>
      <Button
      info
      onPress={() => handleButtonPress(mileURL)}
      style={styles.button}
    >
      <Text>{getInfo}</Text>
    </Button>
    </View>
  );
}
function PierScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={pier}></Image>
      <Button
      info
      onPress={() => handleButtonPress(pierURL)}
      style={styles.button}
    >
      <Text>{getInfo}</Text>
    </Button>
    </View>
  );
}
function WaterScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={water}></Image>
      <Button
      info
      onPress={() => handleButtonPress(waterURL)}
      style={styles.button}
    >
      <Text>{getInfo}</Text>
    </Button>
    </View>
  );
}
function WillisScreen() {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={willis}></Image>
      <Button
      info
      onPress={() => handleButtonPress(willisURL)}
      style={styles.button}
    >
      <Text>{getInfo}</Text>
    </Button>
    </View>
  );
}

function handleButtonPress(button) {
  WebBrowser.openBrowserAsync(button);
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
  },
  button: {
    margin: 10,
  },
});