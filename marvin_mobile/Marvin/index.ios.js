'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,

} from 'react-native';

class Marvin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: []
    };
  }

  render() {
    var results = this.state.results.map((item, i) => {
      return (
        <View key={i}>
          <TouchableOpacity>
            <Text style={ styles.results }>
              { item.name }
            </Text>
          </TouchableOpacity>
        </View>
      )
    })

    return (
        <Image source={require('./app/styles/marvin-bg-blue.png')} style={styles.container}>
          <Text style={styles.title}>
            MARVIN
          </Text>
          <ScrollView>
            <Image style={styles.marvin} source={ require('./app/styles/marvin_robot.png')}></Image>
            <TextInput
              id="text-input"
              style={styles.textinput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TouchableOpacity style={ styles.buttonPos }>
              <Text style={styles.button}>SEARCH</Text>
            </TouchableOpacity>
            <View>
              { results }
            </View>
          </ScrollView>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52,52,52,0)',
    width: null,
    height: null,
  },
  title: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
  },
  marvin: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  textinput: {
    height: 40,
    margin: 20,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'rgb(255,50,50)',
    color: 'white',
    textAlign: 'center',
    padding: 6,
    height: 30,
    width: 100,
  },
  buttonPos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    backgroundColor: 'white',
    margin: 2,
    padding: 10,
    textAlign: 'center',
    width: 300,
  },
});

AppRegistry.registerComponent('Marvin', () => Marvin);
