import React, { useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from 'components/ui/Container/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsRequest } from './productsPreviewReducer';
import { RootState } from 'store';

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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, isLoading, isFirstLoading } = useSelector((state: RootState) => state.productsPreview);
  console.log(products);
  useEffect(() => {
    dispatch(getAllProductsRequest());
  }, [dispatch]);

  return (
    <Container maxWidth={false}>
      <Typography component='h1' variant='h5'>
        ProductsPreview
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Product name</TableCell>
              <TableCell align='right'>Unit</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Create date</TableCell>
              <TableCell align='right'>Update date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.data.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.unit}</TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>{row.createdAt}</TableCell>
                <TableCell align='right'>{row.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
