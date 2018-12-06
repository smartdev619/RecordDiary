import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Icon, List, ListItem, Left, Body } from 'native-base';

import { Navigation } from 'react-native-navigation'


class App extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Record Diary',
        }
      }
    };
  }

  gotoInsert = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.playground.AddScreen',
      }
    });
  }

  render() {
    const { diaries } = this.props;
    return (
      <Container>
        {diaries.length === 0 && (
          <View style={styles.centerText}>
            <Text style={{ fontSize: 18 }}>Press the + button to create a new entry</Text>
          </View>
        )}
        <List>
          {diaries.length > 0 && diaries.map((diary,i) => (
            <ListItem key={i}>
              <Left><Text>{diary.date}</Text></Left>
              <Body><Text>{diary.situation}</Text></Body>
            </ListItem>
          ))}
        </List>

        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity onPress={this.gotoInsert}>
            <Icon name="add-circle" style={{ fontSize: 40 }} />
          </TouchableOpacity>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {
    diaries: state.diariesStore.diaries
  };
}

export default connect(mapStateToProps)(App);
