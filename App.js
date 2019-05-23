import React from 'react';
import {AppLoading, Font, Asset} from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {ionicons, Ionicons} from '@expo/vector-icons';
import MainNavigation from "./navigation/MainNavigation.js";
export default class App extends React.Component {
  state = {
    loaded: false
  }

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({loaded:true});

  loadAssets = async() => {
    // throw new Error("I am hungry");
    await Font.loadAsync({
      ...Ionicons.font
    })
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ])

  }

  render() {
    const {loaded} = this.state

    if (loaded) {
      return (
          <MainNavigation />
      );
    } else {
      return (
      <AppLoading 
        startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
      />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
