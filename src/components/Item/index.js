import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

export default class Item extends Component {

  render() {
    const props = this.props;

    return (
      <View style={[style.container, {marginLeft: props.leftMarginCoef ? 100 * props.leftMarginCoef : 10}]}>
        <Text style={style.text}>
          {props.title}
        </Text>
        <TouchableOpacity style={style.btn} onPress={props.onItemPress}>
          <Text style={style.plus}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
