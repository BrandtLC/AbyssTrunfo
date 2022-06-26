import React from 'react';

class Atributes extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="atribute1">
          Atributo 1
          <input type="number" id="atribute 1" data-testid="attr1-input" />
        </label>
        <label htmlFor="atribute2">
          Atributo 2
          <input type="number" id="atribute 2" data-testid="attr2-input" />
        </label>
        <label htmlFor="atribute3">
          Atributo 3
          <input type="number" id="atribute 3" data-testid="attr3-input" />
        </label>
      </>
    );
  }
}

export default Atributes;
