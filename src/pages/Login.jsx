import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    user: '',
    isLoading: false,

  };

  handleChange = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  handleClick = async () => {
    const { user } = this.state;
    const { history } = this.props;
    localStorage.setItem('name', user);
    this.setState({
      isLoading: true,
    });
    await createUser({ name: user });
    this.setState({
      isLoading: false,
    });
    history.push('/search');
  };

  render() {
    const magicNumber = 3;
    const { user, isLoading } = this.state;
    return (
      isLoading ? (
        <Loading />
      )
        : (
          <div data-testid="page-login">
            <h1>Login</h1>
            <form>
              <input
                data-testid="login-name-input"
                value={ user }
                name={ user }
                type="text"
                onChange={ this.handleChange }
              />
              <button
                data-testid="login-submit-button"
                disabled={ user.length < magicNumber }
                onClick={ this.handleClick }
                type="button"
              >
                Entrar

              </button>

            </form>
          </div>
        ));
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
