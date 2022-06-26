import React from 'react';

const options = [
  { value: 'normal', label: 'Normal' },
  { value: 'raro', label: 'Raro' },
  { value: 'muito raro', label: 'Muito raro' },
];

class SelectRarity extends React.Component {
  render() {
    return (
      <label htmlFor="rarity">
        Raridade:
        <select id="rarity" data-testid="rare-input">
          {options.map((i) => {
            const newO = <option value={ i.value } key={ i.value }>{ i.label }</option>;
            return (newO);
          })}
        </select>
      </label>
    );
  }
}
export default SelectRarity;
