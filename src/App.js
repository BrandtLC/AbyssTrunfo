import React from 'react';

import Form from './components/Form';

const imputChange = () => 2;
const saveButton = () => 2;

const formProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: imputChange,
  onSaveButtonClick: saveButton,
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Abyss Trunfo</h1>
        <Form { ...formProps } />
      </div>
    );
  }
}

export default App;
