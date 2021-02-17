import React from 'react';
import Header from 'containers/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useDarkMode from 'hooks/useDarkMode';
import history from '../historyHelper';
import { ConnectedRouter } from 'connected-react-router';
import Navbar from './Navbar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
    },
    inner: {
      paddingTop: '24px',
      paddingBottom: '40px',
    },
    table: {
      minWidth: 650,
    },
  })
);

function App() {
  const classes = useStyles();
  const { theme, toggleDarkMode } = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <ConnectedRouter history={history}>
        <CssBaseline />

        <Header toggleDarkMode={toggleDarkMode} />
        <Navbar />
        <main className={classes.content}>
          <Toolbar />
          <div className={classes.inner}>
            <Routes />
          </div>
        </main>
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export default App;
