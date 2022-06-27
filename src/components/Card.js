import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      name,
      image,
      description,
      atr1,
      atr2,
      atr3,
      rarity,
      trunfo,
    } = this.props;

    function trunfoRender(prop) {
      if (prop) {
        return (
          <p data-testid="trunfo-card">Super Trunfo</p>
        );
      }
    }
    return (
      <div className="card">
        <h2 data-testid="name-card">{ name }</h2>
        <img src={ image } alt={ name } data-testid="image-card" />
        <p data-testid="description-card">{ description }</p>
        <p data-testid="attr1-card">{ atr1 }</p>
        <p data-testid="attr2-card">{ atr2 }</p>
        <p data-testid="attr3-card">{ atr3 }</p>
        <p data-testid="rare-card">{ rarity }</p>
        <trunfoRender />

      </div>

    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  atr1: PropTypes.string.isRequired,
  atr2: PropTypes.string.isRequired,
  atr3: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
};

export default Card;
