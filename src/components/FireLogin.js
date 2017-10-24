import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';

const imageUrl = require('../images/appbg.jpg');


class FireLogin extends Component {
  render() {
    const { backgroundImage, headingStyle, subStyle } = styles;

    return (
      <ImageBackground source={imageUrl} style={backgroundImage}>
        <Text style={headingStyle}>EPIONE</Text>
        <Text style={subStyle}>Login</Text>
      </ImageBackground>
    );
  }
}

const styles = {
    headingStyle: {
      fontSize: 60,
      color: 'darkslategrey',
      backgroundColor: 'transparent',
      paddingTop: '25%',
      fontFamily: 'Iowan Old Style'
    },
    subStyle: {
      fontSize: 18,
      color: 'darkslategrey',
      backgroundColor: 'transparent',
      paddingTop: '1%',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
};

export { FireLogin };
