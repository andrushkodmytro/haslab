import React from 'react';
import Container from 'components/ui/Container/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createProductRequest } from './productCreateReducer';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

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
  paper: {
    padding: '24px',
  },
  description: {
    width: '504px !important',
  },
}));

export default function ProductCreate() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data: any) => {
    const x = localStorage.getItem('auth');
    const companyId = x ? JSON.parse(x)?.user?.companyId : null;
    dispatch(createProductRequest({ ...data, companyId }));
  };

  const { name: nameError, price: priceError, description: descriptionError, unit: unitError } = errors;
  return (
    <Container maxWidth='sm'>
      <Typography component='h1' variant='h5'>
        Create a new product
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                rules={{ required: { value: true, message: 'Product Name is required' } }}
                defaultValue=''
                name='name'
                variant='outlined'
                // required
                fullWidth
                label='Product Name'
                autoFocus
                error={!!nameError}
                helperText={!!nameError && nameError?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                rules={{ required: { value: true, message: 'Price name is required' } }}
                defaultValue=''
                name='price'
                variant='outlined'
                // required
                fullWidth
                label='Price'
                error={!!priceError}
                helperText={!!priceError && priceError?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                rules={{ required: { value: true, message: 'Description name is required' } }}
                defaultValue=''
                name='description'
                variant='outlined'
                // required
                fullWidth
                label='Description'
                error={!!descriptionError}
                helperText={!!descriptionError && descriptionError?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
                rules={{ required: { value: true, message: 'Unit name is required' } }}
                defaultValue=''
                name='unit'
                variant='outlined'
                // required
                fullWidth
                label='Unit'
                error={!!unitError}
                helperText={!!unitError && unitError?.message}
              />
            </Grid>
          </Grid>
        </Paper>

        <Button type='submit' variant='contained' color='primary' size='large' className={classes.submit}>
          Create
        </Button>
      </form>
    </Container>
  );
}
