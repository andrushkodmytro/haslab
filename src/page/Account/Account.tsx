import React, { useEffect } from 'react';
import { getAccountRequest } from 'page/Account/accountReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import Container from 'components/ui/Container/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  loginPage: {
    marginTop: '120px',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Account() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const { email, firstName, lastName } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getAccountRequest());
  }, [dispatch]);

  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // const { email, password } = e.target;

    // const data = { email: email.value, password: password.value };

    // const { from } = location.state || { from: { pathname: '/' } };
    // dispatch(loginRequest({ data, from }));
  };
  console.log(errors);
  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        Account
      </Typography>

      <form onSubmit={handleSubmit(loginHandler)}>
        <TextField
          label='First name'
          placeholder='First name'
          margin='normal'
          name='firstName'
          fullWidth
          variant='outlined'
          autoFocus
          inputRef={register({
            required: {
              value: true,
              message: 'First name is required.',
            },
          })}
        />
        <TextField
          label='Last name'
          placeholder='Last name'
          margin='normal'
          name='lastName'
          fullWidth
          variant='outlined'
          inputRef={register({
            required: {
              value: true,
              message: 'Last name is required.',
            },
          })}
        />

        <TextField label='Email' placeholder='Email' margin='normal' name='email' fullWidth variant='outlined' />

        <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary' size='large'>
          Save
        </Button>
      </form>
    </Container>
  );
}
