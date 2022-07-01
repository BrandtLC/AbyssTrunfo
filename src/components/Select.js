import React from 'react';
import PropTypes from 'prop-types';

const options = [
  { value: 'normal', label: 'Normal' },
  { value: 'raro', label: 'Raro' },
  { value: 'muito raro', label: 'Muito raro' },
];

class SelectRarity extends React.Component {
  render() {
    const { cardRare, onChangeFunc } = this.props;
    return (
      <label htmlFor="rarity">
        <h4 className="titles">
          Raridade:
        </h4>
        <select
          id="rarity"
          name="cardRare"
          className="selectInput"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onChangeFunc }
        >
          {options.map((i) => {
            const newObject = (
              <option
                value={ i.value }
                key={ i.value }
              >
                { i.label }
              </option>
            );
            return (newObject);
          })}
        </select>
      </label>
    );
  }
}

SelectRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default SelectRarity;
