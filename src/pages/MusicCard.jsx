import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  state = {
    box: false,
    isLoading: '',
  };

  handleChange = async () => {
    const { track } = this.props;
    this.setState({
      isLoading: true,
    });
    await addSong(track);
    this.setState({
      box: true,
      isLoading: false,
    });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { box, isLoading } = this.state;
    return (

      (isLoading)
        ? <Loading />
        : (
          <div>
            <div>Demo:</div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              {' '}
              <code>audio</code>
              .
            </audio>
            <p>{trackName}</p>
            <label htmlFor={ trackId }>
              Favorita
              <input
                checked={ box }
                type="checkbox"
                id={ trackId }
                name=""
                onChange={ this.handleChange }
                data-testid={ `checkbox-music-${trackId}` }
              />

            </label>
          </div>
        )

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
