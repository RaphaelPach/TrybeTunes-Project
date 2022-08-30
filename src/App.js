import React from 'react';
import { Route } from 'react-router-dom';
import Login from './src/pages/Login';
import Album from './src/pages/Album';
import Search from './src/pages/Search';
import Favorites from './src/pages/Favorites';
import Profile from './src/pages/Profile';
import ProfileEdit from './src/pages/ProfileEdit';
import NotFound from './src/pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Route exact path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </>
    );
  }
}

export default App;
