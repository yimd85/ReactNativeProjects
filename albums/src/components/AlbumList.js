import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//this is an example of a class based component. State is only used in class based components
class AlbumList extends Component {
  //default state a class level object. This is an inital state
  state = { albums: [] };

//after we fetch out data we take that state and update the componnet state
//state: a plain JS object used to record and respond to user-triggered events
//we will always update the state using 'this.setState'
//the difference between props and state. whenever we want to commincate
//between a parent and child communication
//state is an internal component record keeping
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //create a helper method that help
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
