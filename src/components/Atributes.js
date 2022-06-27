import React from 'react';
import PropTypes from 'prop-types';

class Atributes extends React.Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    const { atr: { atr1, atr2, atr3 }, onChangefunc } = this.props;
    return (
      <>
        <label htmlFor="atribute1">
          Atributo 1
          <input
            type="number"
            name="atr1"
            id="atribute 1"
            data-testid="attr1-input"
            value={ atr1 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute2">
          Atributo 2
          <input
            type="number"
            name="atr2"
            id="atribute 2"
            data-testid="attr2-input"
            value={ atr2 }
            onChange={ onChangefunc }
          />
        </label>
        <label htmlFor="atribute3">
          Atributo 3
          <input
            type="number"
            name="atr3"
            id="atribute 3"
            data-testid="attr3-input"
            value={ atr3 }
            onChange={ onChangefunc }
          />
        </label>
      </>
    );
  }
}

Atributes.propTypes = {
  atr: PropTypes.shape({
    atr1: PropTypes.string,
    atr2: PropTypes.string,
    atr3: PropTypes.string,
  }).isRequired,
  onChangefunc: PropTypes.func.isRequired,
};

export default Atributes;
