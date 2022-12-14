import React from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

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
      hasTrunfo,
      cards,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    const renderCheckbox = () => {
      if (!hasTrunfo) {
        return (
          <label htmlFor="sptrunfo">
            <h4 className="titles">
              Super Trunfo
            </h4>
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              className="trunfoCheck"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>);
      } return ('');
    };

    return (
      <form onSubmit={ onSaveButtonClick }>
        <label htmlFor="name" className="txtLabel">
          <h4 className="titles">
            Nome:
          </h4>
          <input
            type="text"
            name="cardName"
            className="txtInput"
            id="name"
            data-testid="name-input"
            autoComplete="off"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description" className="txtLabel">
          <h4 className="titles">
            Descrição:
          </h4>
          <textarea
            name="cardDescription"
            cols="30"
            className="txtInput"
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

        <label htmlFor="path" className="txtLabel">
          <h4 className="titles">
            Imagem:
          </h4>
          <input
            type="text"
            name="cardImage"
            className="txtInput"
            id="path"
            autoComplete="off"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <SelectRarity
          cardRare={ cardRare }
          onChangeFunc={ onInputChange }
        />

        { renderCheckbox() }

        { cards && cards.find((c) => c.cardTrunfo === true)
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : ''}

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
  hasTrunfo: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
