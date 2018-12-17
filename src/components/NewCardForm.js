import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "relaxed", "balloon", "black_heart"]


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: ""
    };
  }

  onFormChange = (event) => {
    console.log("Made a change!")
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState)
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      card: {
        text: this.state.text,
        emoji: this.state.emoji
      }
    }

    this.setState({
      text: '',
      emoji: ''
    });

    console.log("successfully created a new card whoo!", newCard);
    this.props.addCardCallback(newCard);
  }

  emojiSelection = () => {
   return  EMOJI_LIST.map((item, i) => {
     return <option
       key={i}
       value={item}>{emoji.getUnicode(item)}</option>
   });
 }

  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">
          <h2>New Card</h2>
        </div>

        <form className="new-card-form__form"
              onSubmit={this.onFormSubmit}>
              <label htmlFor="text">Your Message</label>
              <textarea
                className="new-card-form__form-textarea"
                name="text"
                value={this.state.text}
                onChange={this.onFormChange}
              />
            <label htmlFor="emoji">Emoji</label>
            <select
              className="new-card-form__form-select"
              name="emoji"
              value={this.state.emoji}
              onChange={this.onFormChange}>
              {this.emojiSelection()}
            </select>
            <input type="submit"
                   value="Submit Message"
                   className="new-card-form__form-button"
            />
        </form>
      </div>
    )
  }

}

export default NewCardForm;
