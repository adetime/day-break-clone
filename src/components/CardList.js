import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Card } from './common';

import getCards from './../server/api';



class CardList extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      loading: true,
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
      cards: getCards(),
    });
  }

  renderCard = () => {
    if (!this.state.loading){
      return this.state.cards.map(card => <Card key={card.id} data={card} />);
    }else {
      return <Text>Loading ...</Text>;
    }
  }


  render() {
    return (
      <ScrollView>
        {this.renderCard()}
      </ScrollView>
    );
  }

}

export default CardList;
