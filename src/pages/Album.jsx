import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import Loading from './Loading';

class Album extends Component {
  state = {
    art: '',
    music: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const getOne = await getMusics(id);
    console.log(getOne);
    this.setState({
      art: getOne,
      music: getOne.filter((_, age) => (
        age > 0
      )),

    });
  }

  render() {
    const { art, music } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {
          art === ''
            ? (<Loading />)
            : (
              <div>
                <h1>
                  Album
                </h1>
                <h3 data-testid="artist-name">
                  {art[0].artistName}
                </h3>
                <h4 data-testid="album-name">
                  {art[0].artistName}
                  { ' :' }
                  {art[0].collectionName}

                </h4>
                {
                  music.map((cria) => (
                    <MusicCard
                      key={ cria.trackId }
                      trackName={ cria.trackName }
                      previewUrl={ cria.previewUrl }
                      trackId={ cria.trackId }
                      track={ cria }
                    />
                  ))
                }
              </div>)
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
