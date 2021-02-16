import React, { useEffect } from 'react';
import { createCompanyRequest } from 'page/CompanyCreate/companyCreateReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import Container from 'components/ui/Container/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { EMAIL_REGEX } from 'utils/constants';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
  description: {
    width: '396px !important',
  },
}));

export default function CompanyCreate() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { handleSubmit, control, errors, setValue } = useForm();

  const account = useSelector((state: RootState) => state.account);

  const companyCreateHandler = (data: any) => {
    dispatch(createCompanyRequest({ data }));
  };

  const { firstName: firstNameError, lastName: lastNameError, email: emailError } = errors;
  return (
    <Container maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        New Company
      </Typography>

      <form onSubmit={handleSubmit(companyCreateHandler)}>
        <Controller
          as={TextField}
          control={control}
          // rules={{ required: { value: true, message: 'First name is required' } }}
          defaultValue=''
          label='Company name'
          placeholder='Company name'
          margin='normal'
          name='companyName'
          fullWidth
          variant='outlined'
          autoFocus
          error={!!firstNameError}
          helperText={!!firstNameError && firstNameError?.message}
        />
        <Controller
          as={TextField}
          control={control}
          // rules={{ required: { value: true, message: 'Last name is required.' } }}
          defaultValue=''
          label='Country'
          placeholder='Country'
          margin='normal'
          name='country'
          fullWidth
          variant='outlined'
          error={!!lastNameError}
          helperText={!!lastNameError && lastNameError?.message}
        />
        <Controller
          as={TextField}
          control={control}
          // rules={{
          //   required: { value: true, message: 'Email name is required' },
          //   pattern: { value: EMAIL_REGEX, message: 'Email  is wrong format.' },
          // }}
          defaultValue=''
          label='City'
          placeholder='City'
          margin='normal'
          name='city'
          fullWidth
          variant='outlined'
          error={!!emailError}
          helperText={!!emailError && emailError?.message}
        />

        <TextareaAutosize
          className={classes.description}
          aria-label='Description'
          rowsMin={3}
          placeholder='Minimum 3 rows'
        />

        <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary' size='large'>
          Save
        </Button>
      </form>
    </Container>
  );
}
