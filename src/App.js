import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

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
      rarity: 'Normal',
      isTrunfo: false,
      isThereTrunfo: false,
      save: true,
    };

    // this.validate = this.validate.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.change = this.change.bind(this);
  }

  handleChange = ({ target }) => {
    const { name: param } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [param]: value }, () => this.validate(this.state));
    // this.change(param, value);

    // this.validate(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  validate = (state) => {
    const atr1N = Number(state.atr1);
    const atr2N = Number(state.atr2);
    const atr3N = Number(state.atr3);
    const soma = atr1N + atr2N + atr3N;
    const nov = 90;
    const max = 210;
    if (
      state.name !== ''
    && state.description !== ''
    && state.atr1 !== ''
    && atr1N <= nov
    && atr1N >= 0
    && state.atr2 !== ''
    && atr2N <= nov
    && atr2N >= 0
    && state.atr3 !== ''
    && atr3N <= nov
    && atr3N >= 0
    && soma <= max
    && state.image !== ''
    && state.rarity !== ''
    ) {
      this.setState({ save: false });
    } else this.setState({ save: true });
  }

  change = (param, value) => {
    this.setState({
      [param]: value,
    });
  }

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
      onSaveButtonClick: this.handleSubmit,
    };

    const cardProps = {
      cardName: name,
      cardImage: image,
      cardDescription: description,
      cardAttr1: atr1,
      cardAttr2: atr2,
      cardAttr3: atr3,
      cardRare: rarity,
      cardTrunfo: isTrunfo,
    };

    return (
      <>
        <div>
          <h1>Abyss Trunfo</h1>
          <Form { ...formProps } />
        </div>
        <Card { ...cardProps } />
      </>
    );
  }
}

export default App;
