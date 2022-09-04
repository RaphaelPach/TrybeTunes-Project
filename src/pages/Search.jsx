import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends Component {
  state = {
    textNumber: '',
    isDisabled: true,
    loading: false,
    artist: '',
    albuns: [],
    refresh: false,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      textNumber: value,
    });
    /*  const test = value.length < 2;
    this.setState({
      isDisabled: test,
    }); */
    if (value.length >= 2) { this.setState({ isDisabled: false }); } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  requestApi = async () => {
    this.setState({
      loading: true,
    });
    const { textNumber } = this.state;
    const api = await searchAlbumsAPI(textNumber);
    console.log(api);
    this.setState((prevState) => ({
      artist: prevState.textNumber,
      textNumber: '',
      loading: false,
      albuns: api,
      refresh: true,
    }));
  };

  render() {
    const { textNumber,
      isDisabled,
      loading,
      artist,
      albuns,
      refresh } = this.state;
    return (
      <>
        <Header />
        {

          loading ? <Loading />
            : (
              <div data-testid="page-search">
                <h1>
                  Search
                </h1>
                <form>
                  <input
                    data-testid="search-artist-input"
                    type="text"
                    id="inputTextName"
                    value={ textNumber }
                    onChange={ this.handleChange }
                  />
                  <button
                    type="button"
                    data-testid="search-artist-button"
                    disabled={ isDisabled }
                    onClick={ this.requestApi }
                  >
                    Pesquise
                  </button>

                </form>
                {
                  refresh
          && (albuns.length === 0)
                    ? (
                      <h2>Nenhum álbum foi encontrado</h2>
                    )
                    : (
                      <>
                        <p>
                          {`Resultado de álbuns de: ${artist}`}
                          {' '}
                        </p>
                        {
                          albuns.map((album) => (
                            <Link
                              key={ album.collectionId }
                              data-testid={ `link-to-album-${album.collectionId}` }
                              to={ `/album/${album.collectionId}` }
                            >
                              <p>
                                {
                                  album.artistName
                                }
                              </p>
                              <p>
                                {
                                  album.collectionName
                                }

                              </p>
                              <img
                                src={ album.artworkUrl100 }
                                alt={ album.collectionName }
                              />
                              vá ao album
                            </Link>

                          ))
                        }
                      </>
                    )
                }
              </div>
            )
        }
      </>
    );
  }
}

export default Search;
