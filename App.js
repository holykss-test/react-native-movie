import React from 'react';
import {AppLoading, Font, Asset} from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {ionicons, Ionicons} from '@expo/vector-icons';


export default class App extends React.Component {
  state = {
    loaded: false
  }

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({loaded:true});

  loadAssets = async() => {
    throw new Error("I am hungry");
    await Font.loadAsync({
      ...Ionicons.font
    })
    // await Asset.loadAsync({
    //   require("images/icon.png")
    // })

  }

  render() {
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return <AppLoading 
      startAsync={this.loadAssets}
        onFinish={this.handleLoaded}
         onError={this.handleError}/>;
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
