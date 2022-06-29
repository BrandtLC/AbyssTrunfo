import React from 'react';
import propTypes from 'prop-types';

const options = [
  { value: 'normal', label: 'Normal' },
  { value: 'raro', label: 'Raro' },
  { value: 'muito raro', label: 'Muito raro' },
];

class Filter extends React.Component {
  render() {
    const {
      txtFilter,
      selectFilter,
      checkboxFilter,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="txtFilter">
          Filtro:
          <input
            type="text"
            id="txtFilter"
            name="txtFilter"
            data-testid="name-filter"
            value={ txtFilter }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarityFilter">
          Raridade:
          <select
            id="rarityFilter"
            name="selectFilter"
            data-testid="rare-filter"
            value={ selectFilter }
            onChange={ onInputChange }
          >
            <option value="todas" key="todas">Todas</option>
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

        <label htmlFor="trunfoFilter">
          Super Trunfo
          <input
            type="checkbox"
            name="checkboxFilter"
            id="trunfoFilter"
            data-testid="trunfo-filter"
            checked={ checkboxFilter }
            onChange={ onInputChange }
          />
        </label>
      </div>

    );
  }
}

Filter.propTypes = {
  txtFilter: propTypes.string.isRequired,
  selectFilter: propTypes.string.isRequired,
  checkboxFilter: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Filter;
