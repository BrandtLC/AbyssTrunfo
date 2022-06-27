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
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
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
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: 'Nome da carta',
  cardDescription: 'Descrição da carta',
  cardAttr1: '12',
  cardAttr2: '34',
  cardAttr3: '56',
  cardImage: 'url-to-image',
  cardRare: 'raro',
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => { },
  onSaveButtonClick: () => { },
};

export default Form;
