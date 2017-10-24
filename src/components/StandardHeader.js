// Importing Libraries
import React from 'react';
import { View, Text } from 'react-native';

const StandardHeader = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 30,
    color: 'blue',
  },
  viewStyle: {
    backgroundColor: '#eef3f4',
    paddingTop: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  }
};

export { StandardHeader };
