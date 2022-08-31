import React, { Component } from 'react';
import Header from './Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h1>
          Profile
        </h1>
      </div>
    );
  }
}
export default Profile;
