import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
    };
  }

  handleChange(event) {
    this.setState({});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input data-testid="name-input" type="text" name="name" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea data-testid="description-input" name="description" />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input data-testid="attr1-input" type="number" name="attr1" />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input data-testid="attr2-input" type="number" name="attr2" />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input data-testid="attr3-input" type="number" name="attr3" />
        </label>
        <label htmlFor="image-input">
          <input data-testid="image-input" type="text" name="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" name="rare" id="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" name="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
