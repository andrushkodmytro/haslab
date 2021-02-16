import React, { useEffect } from 'react';
import { getAccountRequest, uploadLogoRequest } from 'page/Account/accountReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import Container from 'components/ui/Container/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { EMAIL_REGEX } from 'utils/constants';
import UploadButtons from 'components/ui/UploadsButton';

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
  const { handleSubmit, control, errors, setValue } = useForm();

  const account = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getAccountRequest());
  }, [dispatch]);

  useEffect(() => {
    const { firstName, lastName, email } = account;

    if (account) {
      setValue('firstName', firstName);
      setValue('lastName', lastName);
      setValue('email', email);
    }
  }, [account, setValue]);

  const loginHandler = (e: React.FormEvent) => {
    // const { email, password } = e.target;
    // const data = { email: email.value, password: password.value };
    // const { from } = location.state || { from: { pathname: '/' } };
    // dispatch(loginRequest({ data, from }));
  };

  const uploadLogoHandler = (file: any) => {
    const formData = new FormData();
    formData.append('myFile', file, file.name);
    dispatch(uploadLogoRequest({ data: formData }));
  };

  const { firstName: firstNameError, lastName: lastNameError, email: emailError } = errors;

  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        Account
      </Typography>

      <UploadButtons uploadLogoHandler={uploadLogoHandler} />

      <form onSubmit={handleSubmit(loginHandler)}>
        <Controller
          as={TextField}
          control={control}
          rules={{ required: { value: true, message: 'First name is required' } }}
          defaultValue=''
          label='First name'
          placeholder='First name'
          margin='normal'
          name='firstName'
          fullWidth
          variant='outlined'
          autoFocus
          error={!!firstNameError}
          helperText={!!firstNameError && firstNameError?.message}
        />
        <Controller
          as={TextField}
          control={control}
          rules={{ required: { value: true, message: 'Last name is required.' } }}
          defaultValue=''
          label='Last name'
          placeholder='Last name'
          margin='normal'
          name='lastName'
          fullWidth
          variant='outlined'
          error={!!lastNameError}
          helperText={!!lastNameError && lastNameError?.message}
        />
        <Controller
          as={TextField}
          control={control}
          rules={{
            required: { value: true, message: 'Email name is required' },
            pattern: { value: EMAIL_REGEX, message: 'Email  is wrong format.' },
          }}
          defaultValue=''
          label='Email'
          placeholder='Email'
          margin='normal'
          name='email'
          fullWidth
          variant='outlined'
          error={!!emailError}
          helperText={!!emailError && emailError?.message}
        />

        <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary' size='large'>
          Save
        </Button>
      </form>
    </Container>
  );
}
