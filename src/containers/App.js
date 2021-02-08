import React from 'react';
import Header from 'containers/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { theme } from 'theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';

import useDarkMode from 'hooks/useDarkMode';
import { Switch, FormControlLabel } from '@material-ui/core';
import './App.css';

const baseUrl = 'http://localhost:5000/api/auth';

function App() {
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const { email, password } = e.target;

    const data = { email: email.value, password: password.value };

    console.log(data);
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    console.log(e.target.email.value);
    const { email, password } = e.target;

    const data = { email: email.value, password: password.value };

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const [ theme, toggleDarkMode ] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
        <CssBaseline />

        <Header toggleDarkMode={toggleDarkMode} />

        <Routes />
      </Router>

      {/* <form onSubmit={registerHandler}>
        <input placeholder='Email' name='email' />
        <input placeholder='Password' name='password' />
        <button type='submit'>Submit</button>
      </form>

      <form onSubmit={loginHandler}>
        <input placeholder='Email' name='email' />
        <input placeholder='Password' name='password' />
        <button type='submit'>Submit</button>
      </form> */}
    </ThemeProvider>
  );
}

export default App;
