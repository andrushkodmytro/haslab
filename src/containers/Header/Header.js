import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'components/ui/Container';
import { Switch, FormControlLabel } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navLink:{
      color: 'red'
    }
  })
);

export default function Header({ toggleDarkMode }) {
  const classes = useStyles();

  let history = useHistory();

  const onLogin = () => {
    history.push('/login');
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
          <FormControlLabel control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />} />
          <Link component={RouterLink} className={classes.navLink} to="/login">Login</Link>
          {/* <Link component={RouterLink} className={classes.navLink} to="/login">Login</Link> */}

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
