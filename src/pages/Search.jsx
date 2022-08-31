import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>
          Search
        </h1>
      </div>
    );
  }
}

export default Search;
