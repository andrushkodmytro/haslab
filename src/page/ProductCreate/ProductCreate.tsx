import React, { useEffect } from 'react';
import Container from 'components/ui/Container/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { resetCreateProductPage, createProductRequest, getProductCategoryRequest } from './productCreateReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RootState } from 'store';
import { ICategory } from './interfaces';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    loginPage: {
      marginTop: '120px',
    },

    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    btn: {
      margin: theme.spacing(3, 0, 2),
      '& + button': {
        margin: theme.spacing(3, 0, 2, 1),
      },
    },
    paper: {
      padding: '24px',
    },
    description: {
      width: '504px !important',
    },
    input: {
      display: 'none',
    },
    previewImgWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    previewImg: {
      maxWidth: '300px',
      minHeight: '300px',
      border: '1px solid rgba(0,0,0,.23)',
      height: '100px',
      flexGrow: 1,
      borderRadius: theme.shape.borderRadius,
      marginBottom: theme.spacing(2),
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      alignItems: 'center',
      flexShrink: 0,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      userSelect: 'none',
      justifyContent: 'center',

      '& img': {
        color: 'transparent',
        width: '100%',
        height: '100%',

        objectFit: 'cover',
        textAlign: 'center',
        textIndent: '10000px',
      },
    },
    btnWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  };
});

export default function ProductCreate() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { categories } = useSelector((state: RootState) => state.productCreate);

  console.log(categories);

  useEffect(() => {
    dispatch(getProductCategoryRequest());
    return () => {
      dispatch(resetCreateProductPage());
    };
  }, [dispatch]);

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = ({ name, description, price, category }: any) => {
    dispatch(createProductRequest({ name, description, price, categoryId: category._id }));
  };

  const { name: nameError, category: categoryError, price: priceError, description: descriptionError } = errors;
  return (
    <Container maxWidth='md'>
      <Typography component='h1' variant='h5'>
        Create a new product
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={6} className={classes.previewImgWrapper}>
              <div className={classes.previewImg}>
                <img src='https://picsum.photos/200/300' alt='Product' />
              </div>
              <input accept='image/*' className={classes.input} id='contained-button-file' multiple type='file' />
              <label htmlFor='contained-button-file'>
                <Button variant='contained' color='primary' component='span'>
                  Upload
                </Button>
              </label>
            </Grid>

            <Grid item xs={6}>
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
                    render={(props) => (
                      <Autocomplete
                        {...props}
                        options={categories}
                        getOptionLabel={(option: ICategory) => option.name}
                        getOptionSelected={(option: ICategory, value: ICategory) => {
                          return option.name === value.name;
                        }}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            label='Product category'
                            variant='outlined'
                            error={!!categoryError}
                            helperText={!!categoryError && categoryError?.message}
                          />
                        )}
                        onChange={(_: any, data: any) => props.onChange(data)}
                      />
                    )}
                    rules={{ required: { value: true, message: 'Category is required' } }}
                    name='category'
                    control={control}
                    defaultValue={null}
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
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.btnWrapper}>
          <Button variant='contained' color='secondary' size='large' className={classes.btn}>
            Cancel
          </Button>

          <Button type='submit' variant='contained' color='primary' size='large' className={classes.btn}>
            Create
          </Button>
        </div>
      </form>
    </Container>
  );
}
