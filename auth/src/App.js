import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmYo8mZGL8mxJ2K6wlm_9DD0_DZQZAwmo',
      authDomain: 'authentication-de4e5.firebaseapp.com',
      databaseURL: 'https://authentication-de4e5.firebaseio.com',
      storageBucket: 'authentication-de4e5.appspot.com',
      messagingSenderId: '1080886761685'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
switch (this.state.loggedIn) {
  case true:
    return (
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          LogOut
        </Button>
      </CardSection>
    );
  case false:
    return <LoginForm />;
  default:
    return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
