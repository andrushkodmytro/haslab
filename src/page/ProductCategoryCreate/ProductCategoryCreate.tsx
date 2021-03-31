import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from 'components/ui/Container/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {
  useDispatch,
  //  useSelector
} from 'react-redux';
import { createProductCategoryRequest } from './productCategoryCreateReducer';
import { useForm, Controller } from 'react-hook-form';
// import { RootState } from 'store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '24px',
    },
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
    formControl: {
      width: '100%',
    },
  })
);

// interface IProduct {
//   _id: string;
//   name: string;
//   quantity: number;
// }

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { handleSubmit, control, errors } = useForm();

  // const { products } = useSelector((state: RootState) => state.orderCreate);

  // const [selectProducts, setSelectProducts] = useState<any>([
  //   {
  //     _id: 'string',
  //     name: 'string',
  //     quantity: 10,
  //   },
  // ]);

  const onSubmit = ({ name, description }: any) => {
    // const x = localStorage.getItem('auth');
    // const companyId = x ? JSON.parse(x)?.user?.companyId : null;
    dispatch(createProductCategoryRequest({ name, description }));
  };

  const { name: nameError, description: descriptionError } = errors;

  return (
    <Container maxWidth='sm'>
      <Typography component='h1' variant='h5'>
        Category create
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
                label='Name'
                autoFocus
                error={!!nameError}
                helperText={!!nameError && nameError?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                as={TextField}
                control={control}
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

            <Grid item xs={6}>
              <Button variant='outlined' fullWidth color='secondary' size='large'>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button type='submit' fullWidth variant='contained' color='primary' size='large'>
                Create
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Container>
  );
}
