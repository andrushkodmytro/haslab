import React from 'react';
import Header from 'containers/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import useDarkMode from 'hooks/useDarkMode';
import history from '../historyHelper';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

function App() {
  const { theme, toggleDarkMode } = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <ConnectedRouter history={history}>
        <CssBaseline />

        <Header toggleDarkMode={toggleDarkMode} />

        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export default App;
