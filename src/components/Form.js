import React from 'react';
import PropTypes from 'prop-types';

import Atributes from './Atributes';
import SelectRarity from './Select';

class Form extends React.Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Atributes
          atr={ {
            atr1: cardAttr1,
            atr2: cardAttr2,
            atr3: cardAttr3,
          } }
          onChangefunc={ onInputChange }
        />

        <label htmlFor="path">
          Imagem
          <input
            type="text"
            name="image"
            id="path"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <SelectRarity
          rarity={ cardRare }
          onChangeFunc={ onInputChange }
        />

        <label htmlFor="sptrunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="isTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
          name="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
