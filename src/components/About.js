// Importing libraries
import React, { Component } from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

const imageUrl = require('../images/appbg.jpg');

class About extends Component {


  render() {
    const { backgroundImage, headingStyle, subStyle,
      button1Style, button2Style, aboutStyle } = styles;

    return (
      <ImageBackground source={imageUrl} style={backgroundImage}>
        <Text style={headingStyle}>EPIONE</Text>
        <Text style={subStyle}>Revolutionizing healthcare.</Text>
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
  button1Style: {
    backgroundColor: 'darkslategrey',
    marginTop: '30%',
    width: 200,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button2Style: {
    backgroundColor: 'darkcyan',
    width: 200,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  aboutStyle: {
    fontSize: 18,
    backgroundColor: 'transparent',
    paddingTop: 40,
    textDecorationLine: 'underline',
  }
};

export { About };
