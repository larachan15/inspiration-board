import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">
            {this.props.text}
          </p>
          <p className="card__content-emoji">
            {this.props.emoji}
          </p>
        </div>
      </div>
    )
  }
}
// const Card = (props) => {
//   const { text, emoji } = props;
//
//   return (
//         <div className="card">
//           <div className="card__content">
//           <p className="card__content-text">{text}</p>
//           <p className="card__content-emoji">{emoji}</p>
//           </div>
//         </div>
//       )
// }

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string
};

export default Card;
