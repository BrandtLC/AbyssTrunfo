import React from 'react';
import PropTypes from 'prop-types';

const options = [
  { value: 'normal', label: 'Normal' },
  { value: 'raro', label: 'Raro' },
  { value: 'muito raro', label: 'Muito raro' },
];

class SelectRarity extends React.Component {
  render() {
    const { rarity, onChangeFunc } = this.props;
    return (
      <label htmlFor="rarity">
        Raridade:
        <select
          id="rarity"
          name="rarity"
          data-testid="rare-input"
          value={ rarity }
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
  rarity: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default SelectRarity;
