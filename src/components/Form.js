import React from 'react';
import PropTypes from 'prop-types';

import Atributes from './Atributes';
import SelectRarity from './Select';

class Form extends React.Component {
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
      <form onSubmit={ onSaveButtonClick }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="cardName"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            name="cardDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Atributes
          atr={ {
            cardAttr1,
            cardAttr2,
            cardAttr3,
          } }
          onChangefunc={ onInputChange }
        />

        <label htmlFor="path">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="path"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <SelectRarity
          cardRare={ cardRare }
          onChangeFunc={ onInputChange }
        />

        <label htmlFor="sptrunfo">
          Super Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          data-testid="save-button"
          type="submit"
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
