import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Card, MoodIcon, Header } from './common';

import getCards from './../server/api';



class CardList extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      loading: true,
      cards: [],
      message: 'inicial',
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
    this.setState({ message: 'passei' });


    if (this.state.loading){
      this.setState({
        cards: getCards(),
      });

      //console.log('state', this.state.cards)


    }
  }

  renderCard = () => {
    if (!this.state.loading){
      return this.state.cards.map( card => {
        const {id, type, userName, timeStamp, body } = card;

        return(
          <Card
            key={id}
            type={type}
            userName={userName}
            body={body}
            timeStamp={timeStamp}
          />
        );
      });
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
