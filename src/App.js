import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

const imputChange = () => 2;
const saveButton = () => 2;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      atr1: '',
      atr2: '',
      atr3: '',
      image: '',
      rarity: '',
      isTrunfo: false,
      isThereTrunfo: false,
      save: true,
    };
  }

handleChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
};

render() {
  const {
    name,
    description,
    atr1,
    atr2,
    atr3,
    image,
    rarity,
    isTrunfo,
    isThereTrunfo,
    save,
  } = this.state;

  const formProps = {
    cardName: name,
    cardDescription: description,
    cardAttr1: atr1,
    cardAttr2: atr2,
    cardAttr3: atr3,
    cardImage: image,
    cardRare: rarity,
    cardTrunfo: isTrunfo,
    hasTrunfo: isThereTrunfo,
    isSaveButtonDisabled: save,
    onInputChange: this.handleChange,
    onSaveButtonClick: saveButton,
  };

  const cardProps = {

  };

  return (
    <>
      <div>
        <h1>Abyss Trunfo</h1>
        <Form { ...formProps } />
      </div>
      <Card
        cardData={ {
          cardName: name,
          cardDescription: description,
          cardAttr1: atr1,
          cardAttr2: atr2,
          cardAttr3: atr3,
          cardImage: image,
          cardRare: rarity,
          cardTrunfo: isTrunfo,
        } }
      />
    </>
  );
}
}

export default App;
