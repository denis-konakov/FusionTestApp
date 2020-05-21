import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import style from './style';
import Item from 'src/components/Item';

export default class App extends Component {

  state = {
    title: '',
    titles: [],
    items: [],
  };

  textChecker() {
    let {title, titles} = this.state;

    if (title.length === 0) {
      alert('Title is empty!');
      return false;
    } else if (titles.indexOf(title) !== -1) {
      alert('This title already exists!');
      return false;
    }
    titles.push(title);
    return true;
  }

  onAddPress() {
    if (!this.textChecker()) {
      return;
    }

    let {items, title} = this.state;
    items[items.length] = [{title: title, column: 0}];
    this.setState({items: items});
  }

  onItemPress(row, column) {
    if (!this.textChecker()) {
      return;
    }

    let {items, title} = this.state;
    let newRow = row + 1, newColumn = column + 1;
    let newItem = [{title: title, column: newColumn}];
    if (!items[newRow]) {
      items[newRow] = newItem;
    } else {
      newRow--;
      while (1) {
        newRow = newRow + 1;
        if (items[newRow][0].column === newColumn) {
          newColumn = items[newRow][items[newRow].length - 1].column + 1;
          items[newRow][items[newRow].length] = {title: title, column: newColumn};
          break;
        } else if (items[newRow][0].column > newColumn || items[newRow][0].column === 0) {
          items.splice(newRow, 0, newItem);
          break;
        }
      }
    }
    this.setState({items: items});
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={style.container}>
        <View style={style.header}>
          <Input
            placeholder='Title'
            containerStyle={style.input}
            onChangeText={(value) => this.setState({title: value})}
            maxLength={15}
          />
          <Button
            title="Add"
            containerStyle={style.button}
            onPress={this.onAddPress.bind(this)}
          />
        </View>
        <ScrollView style={style.itemContainer}>
          {this.state.items.map((rowItems, rowIndex) => (
            <ScrollView horizontal>
              {rowItems.map((item, index) => (
                <Item
                  leftMarginCoef={index === 0 ? item.column : null}
                  title={item.title}
                  onItemPress={() => this.onItemPress(rowIndex, item.column)}
                />
              ))}
            </ScrollView>
          ))}
        </ScrollView>
      </View>
    );
  }
};
