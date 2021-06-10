import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>

        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              id: 113,
              name: 'Hamza',
              class: 'BSCS',
            })
          }
        />
      </View>
    );
  }
}
