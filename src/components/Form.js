import React from 'react';

import Atributes from './Atributes';
import SelectRarity from './Select';

class Form extends React.Component {
//   constructor() {
//     super();
//   }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea cols="30" rows="10" data-testid="description-input" />
        </label>

        <Atributes />

        <label htmlFor="path">
          Imagem
          <input type="text" id="path" data-testid="image-input" />
        </label>

        <SelectRarity />

        <label htmlFor="sptrunfo">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
