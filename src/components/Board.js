import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      errorMessages: []
    };
  }

  componentDidMount() {
    const GET_ALL_CARDS_URL = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`;

    axios.get(GET_ALL_CARDS_URL)
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({
        errorMessages: [...this.state.errorMessages, error.message]
      });
    });
  }

  addCard = (newCard) => {
    const ADD_CARD = `https://inspiration-board.herokuapp.com/boards/Dionisia/cards?text=${newCard.card.text}&emoji=${newCard.card.emoji}`;

    axios.post(ADD_CARD)
    .then((response) => {
      let cardsArray = this.state.cards
      cardsArray.push(response.data)
      this.setState({
        cards: cardsArray
      });
    })
    .catch((error) => {
      this.setState({
        errorMessages: error.message
      })
    })
  }

  deleteCard = (id) => {
    console.log("This card is being deleted!");
    const DELETE_CARD = `https://inspiration-board.herokuapp.com/cards/${id}`;

    console.log(DELETE_CARD);

    axios.delete(DELETE_CARD)
    .then(() => {
      const cardsArray = this.state.cards
      console.log(cardsArray.length);

      const removedCard = cardsArray.findIndex(card => card.id === id)
      cardsArray.splice(removedCard, 1)
       this.setState({
        cards: cardsArray
      });
     })
    .catch((error) => {
      this.setState({
        errorMessages: error.message
      });
    })
  }

  render() {
    // const cardArray = this.state.cardData["cards"]
    // console.log(cardArray);

    // const eachCard = cardArray.map((card, i) => {
    //   // card = card.card
    //   // console.log(card)
    //   return <Card
    //           key={i}
    //           text={card.text}
    //           emoji={card.emoji} />
    // })
    const emoji = require("emoji-dictionary");

    const cardData = this.state.cards.map((card, i) => {
      card = card.card;

      return <Card
                key={i}
                id={card.id}
                text={card.text}
                emoji={emoji.getUnicode(`${card.emoji}`)}
                deleteCardCallback={this.deleteCard}
             />
    })

    return (

      <div>
        <section className="form-section">
          <NewCardForm addCardCallback={this.addCard} />
        </section>

        <section className="board">
          {cardData}
        </section>
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired
};

export default Board;
