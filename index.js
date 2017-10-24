// Importing libraries
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Startup, FireLogin, About } from './src/components/';

const App = StackNavigator({
  Startup: { screen: Startup },
  FireLogin: { screen: FireLogin },
  //About: { screen: About },
});

AppRegistry.registerComponent('Epione', () => App);
