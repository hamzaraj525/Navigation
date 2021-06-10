import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Student ID is : {this.props.route.params.id}</Text>
        <Text>Student Name is = {this.props.route.params.name}</Text>
        <Text>Student Class is = {this.props.route.params.class}</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
