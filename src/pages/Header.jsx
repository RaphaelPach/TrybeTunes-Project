import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    userLog: '',
    loaded: true,
  };

  async componentDidMount() {
    const get = await getUser();
    const { name } = get;
    this.setState({
      userLog: name,
      loaded: false,
    });
  }

  render() {
    const { userLog, loaded } = this.state;
    return (
      <header data-testid="header-component">
        <h1>Cabeçalho</h1>
        { loaded ? <p>Carregando...</p>
          : <p data-testid="header-user-name">{userLog}</p> }
      </header>

    );
  }
}
export default Header;
