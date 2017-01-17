import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, StatusBar } from 'react-native';

import { Card } from './common';
import { getCards } from './../server/api';


class CardList extends Component {
  constructor(props) {
    super(props);

    // Initiate the data source for ListView
    // and define the function which takes tells ListView to re-render
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // Initial state
    this.state = {
      loading: true,
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }


  componentDidMount() {
    // Fetch the data and setState
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(getCards()),
    });
  }

  // Render one ListView row for each Card
  renderRow = (oneCard) => {
    return <Card data={oneCard} />;
  }


  render() {
    // Avoid to render empty section headers
    if (!this.state.loading){
      return (
        <View>
          <StatusBar hidden/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>


      );
    }else {
      // ----------------- Attention: to be changed by a spinning animation
      return <Text>Loading ...</Text>;
    }
  }

}

export default CardList;
