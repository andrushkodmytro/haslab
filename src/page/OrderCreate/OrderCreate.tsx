import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from 'components/ui/Container/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getCreateOrderRequest } from './orderCreateReducer';
import { RootState } from 'store';

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

interface IProduct {
  _id: string;
  name: string;
  quantity: number;
}

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreateOrderRequest());

    return () => {
      // cleanup
    };
  }, [dispatch]);

  const { products } = useSelector((state: RootState) => state.orderCreate);

  const [selectProducts, setSelectProducts] = useState<any>([
    {
      _id: 'string',
      name: 'string',
      quantity: 10,
    },
  ]);

  const addNewProduct = () => {
    setSelectProducts((prev: any) => {
      const newObj = {
        _id: 'string',
        name: 'string',
        quantity: 10,
      };
      return [...prev, { ...newObj }];
    });
  };

  return (
    <Container maxWidth='md'>
      <Typography component='h1' variant='h5'>
        Orders create
      </Typography>

      <form>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                // as={TextField}
                // control={control}
                // rules={{ required: { value: true, message: 'Product Name is required' } }}
                defaultValue=''
                name='client'
                variant='outlined'
                // required
                fullWidth
                label='Client Name'
                autoFocus
                // error={!!nameError}
                // helperText={!!nameError && nameError?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                // as={TextField}
                // control={control}
                // rules={{ required: { value: true, message: 'Product Name is required' } }}
                defaultValue=''
                name='status'
                variant='outlined'
                // required
                fullWidth
                label='Order status'
                // error={!!nameError}
                // helperText={!!nameError && nameError?.message}
              />
            </Grid>

            <Grid item xs={12}>
              Product
            </Grid>
            <Grid item xs={6}>
              {/* <TextField
                // as={TextField}
                // control={control}
                // rules={{ required: { value: true, message: 'Product Name is required' } }}
                defaultValue=''
                name='product'
                variant='outlined'
                // required
                fullWidth
                label='Product'
                // error={!!nameError}
                // helperText={!!nameError && nameError?.message}
              /> */}

              <Autocomplete
                id='combo-box-demo'
                options={products}
                getOptionLabel={(option: any) => option.name}
                renderInput={(params: any) => <TextField {...params} label='Combo box' variant='outlined' />}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                // as={TextField}
                // control={control}
                // rules={{ required: { value: true, message: 'Product Name is required' } }}
                defaultValue=''
                name='quantity'
                variant='outlined'
                // required
                fullWidth
                label='Quantity'
                // error={!!nameError}
                // helperText={!!nameError && nameError?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined' color='secondary' size='large' onClick={addNewProduct}>
                Add row
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='right'>#</TableCell>
                    <TableCell align='right'>Product</TableCell>
                    <TableCell align='right'>Product id</TableCell>
                    <TableCell align='right'>Quantity</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {selectProducts.length
                    ? selectProducts.map((row: IProduct, index: number) => {
                        return (
                          <TableRow key={row._id}>
                            <TableCell align='right'>{index + 1}</TableCell>
                            <TableCell align='right'>{row.name}</TableCell>
                            <TableCell align='right'>{row._id}</TableCell>
                            <TableCell align='right'>{(row.quantity || 0) / 100}</TableCell>
                          </TableRow>
                        );
                      })
                    : null}
                </TableBody>
              </Table>
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
