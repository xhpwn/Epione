import React, { Component } from 'react';
import { View, Text } from 'react-native';

class StandardList extends Component {

  state = {
    reports: []
  };

  componentWillMount() {
    //fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //.then(response => console.log(response));//this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.reports.map(reports => <Text>{reports.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export { StandardList };
