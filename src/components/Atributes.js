import React from 'react';
import PropTypes from 'prop-types';

class Atributes extends React.Component {
  render() {
    const { atr: { cardAttr1, cardAttr2, cardAttr3 }, onChangefunc } = this.props;
    return (
      <>
        <label htmlFor="atribute1" className="txtLabel">
          <h4 className="titles">
            Strength:
          </h4>
          <input
            type="number"
            name="cardAttr1"
            className="rarityOpt"
            id="atribute 1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute2" className="txtLabel">
          <h4 className="titles">
            Agility:
          </h4>
          <input
            type="number"
            name="cardAttr2"
            className="rarityOpt"
            id="atribute 2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute3" className="txtLabel">
          <h4 className="titles">
            Abyss knowlege:
          </h4>
          <input
            type="number"
            name="cardAttr3"
            className="rarityOpt"
            id="atribute 3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onChangefunc }
          />
        </label>
      </>
    );
  }
}

Atributes.propTypes = {
  atr: PropTypes.shape({
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
  }).isRequired,
  onChangefunc: PropTypes.func.isRequired,
};

export default Atributes;
