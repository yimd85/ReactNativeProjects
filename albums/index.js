//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
//import the "header" file.
//we do not have to us the .js on the header because it is a JS file
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
//nest the head component inside the app
const App = () => (
  <View style={{ flex: 1 }}>
    <Header thingToShow={'Albums!'} />
    <AlbumList />
  </View>
  );


//render it to the device
AppRegistry.registerComponent('albums', () => App);
