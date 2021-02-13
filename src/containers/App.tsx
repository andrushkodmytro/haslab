import React from 'react';
import Header from 'containers/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import useDarkMode from 'hooks/useDarkMode';
import { Switch, FormControlLabel } from '@material-ui/core';
import './App.css';

function App() {
  const { theme, toggleDarkMode } = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
        <CssBaseline />

        <Header toggleDarkMode={toggleDarkMode} />

        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
