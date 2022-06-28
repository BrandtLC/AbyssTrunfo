import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'Normal',
  cardTrunfo: false,
  save: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      save: true,
      cards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name: param } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [param]: value }, () => {
      this.validate(this.state);
    });
  }

  validadeCheckbox = () => {
    const { state } = this;
    if (state.cards.find((c) => c.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else { this.setState({ hasTrunfo: false }); }
  }

  handleSubmit = (event) => {
    const ms = 0;
    event.preventDefault();
    this.setState((prevState) => ({
      cards: [...prevState.cards,
        {
          cardName: prevState.cardName,
          cardDescription: prevState.cardDescription,
          cardAttr1: prevState.cardAttr1,
          cardAttr2: prevState.cardAttr2,
          cardAttr3: prevState.cardAttr3,
          cardImage: prevState.cardImage,
          cardRare: prevState.cardRare,
          cardTrunfo: prevState.cardTrunfo,
          key: prevState.cardName,
        }] }));
    this.setState(INITIAL_STATE);
    setTimeout(() => {
      this.validadeCheckbox();
    }, ms);
  }

  validate = (state) => {
    const atr1N = Number(state.cardAttr1);
    const atr2N = Number(state.cardAttr2);
    const atr3N = Number(state.cardAttr3);
    const soma = atr1N + atr2N + atr3N;
    const nov = 90;
    const max = 210;
    if (
      state.cardName !== ''
    && state.cardDescription !== ''
    && state.cardAttr1 !== ''
    && atr1N <= nov
    && atr1N >= 0
    && state.cardAttr2 !== ''
    && atr2N <= nov
    && atr2N >= 0
    && state.cardAttr3 !== ''
    && atr3N <= nov
    && atr3N >= 0
    && soma <= max
    && state.cardImage !== ''
    && state.cardRare !== ''
    ) {
      this.setState({ save: false });
    } else this.setState({ save: true });
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
      hasTrunfo,
      save,
      cards,
    } = this.state;

    const formProps = {
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
      isSaveButtonDisabled: save,
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleSubmit,
    };

    const cardPreviewProps = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    const userCards = cards.map((c) => {
      if (c) {
        return (<Card key={ c.key } { ...c } />);
      }
      return ('');
    });

    return (
      <>
        <div>
          <h1>Abyss Trunfo</h1>
          <Form { ...formProps } />
          <Card { ...cardPreviewProps } />
        </div>
        { userCards }
      </>
    );
  }
}

export default App;
