import React from 'react';
import PropTypes from 'prop-types';
import '../style/Cards.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    function trunfoRender(prop) {
      if (prop) {
        return (
          <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p>
        );
      }
    }
    return (
      <section className="cardSection">
        <div className="card">
          <span className="name">
            <p data-testid="name-card">{ cardName }</p>
          </span>
          <span className="imgSpan">
            { cardImage && (<img
              className="cardImg"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />) }
            {/* <img
            className="cardImg"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          /> */}

          </span>
          <span className="data">
            <p
              className="description"
              data-testid="description-card"
            >
              { cardDescription }
            </p>
            <span className="atrSpan">
              <p>Strength</p>
              <p className="status" data-testid="attr1-card">{ cardAttr1 }</p>
            </span>
            <span className="atrSpan">
              <p>Agility</p>
              <p className="status" data-testid="attr2-card">{ cardAttr2 }</p>
            </span>
            <span className="atrSpan">
              <p>Abyss knowlege</p>
              <p className="status" data-testid="attr3-card">{ cardAttr3 }</p>
            </span>
            <span>
              <p data-testid="rare-card">{ cardRare }</p>
              { trunfoRender(cardTrunfo) }
            </span>
          </span>
        </div>
      </section>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
