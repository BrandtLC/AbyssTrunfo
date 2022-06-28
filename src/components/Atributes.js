import React from 'react';
import PropTypes from 'prop-types';

class Atributes extends React.Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    const { atr: { cardAttr1, cardAttr2, cardAttr3 }, onChangefunc } = this.props;
    return (
      <>
        <label htmlFor="atribute1">
          Atributo 1
          <input
            type="number"
            name="cardAttr1"
            id="atribute 1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute2">
          Atributo 2
          <input
            type="number"
            name="cardAttr2"
            id="atribute 2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute3">
          Atributo 3
          <input
            type="number"
            name="cardAttr3"
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
