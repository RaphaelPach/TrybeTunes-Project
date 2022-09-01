import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  state = {
    textNumber: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      textNumber: value,
    });
  };

  render() {
    const { textNumber } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <h1>
          Search
        </h1>
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            value={ textNumber }
            onChange={ this.handleChange }

          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ textNumber.length < 2 }
          >
            Pesquise
          </button>

        </form>
      </div>
    );
  }
}

export default Search;
