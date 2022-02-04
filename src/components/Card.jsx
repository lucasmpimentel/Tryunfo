import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      key,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card-preview">
        <h2>Pré-visualização</h2>
        <h3 key={ key } data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <div className="attributes-container">
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
        </div>
        <span data-testid="rare-card">{ cardRare }</span>
        {
          cardTrunfo ? (<span data-testid="trunfo-card">Super Trunfo</span>) : null
        }
      </section>
    );
  }
}

Card.propTypes = {
  key: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
