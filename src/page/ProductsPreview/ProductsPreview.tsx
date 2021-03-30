import React, { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Container from 'components/ui/Container/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { resetProductPreviewPage, getAllProductsRequest } from './productsPreviewReducer';
import Skeleton from '@material-ui/lab/Skeleton';
import { RootState } from 'store';
import TablePagination from '@material-ui/core/TablePagination';

import EnhancedTableProps from './EnhancedTableProps';

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

    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  })
);

interface Data {
  name: string;
  unit: string;
  price: number;
  description: string;
  createdAt: number;
  updatedAt: number;
}

type Order = 'asc' | 'desc';

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');

  const {
    products,
    totalPages,
    //  isLoading,
    isFirstLoading,
  } = useSelector((state: RootState) => state.productsPreview);

  useEffect(() => {
    dispatch(getAllProductsRequest({ page: page + 1, limit }));

    return () => {
      dispatch(resetProductPreviewPage());
    };
  }, [dispatch, page, limit]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    dispatch(getAllProductsRequest({ page: newPage + 1, limit }));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
    dispatch(getAllProductsRequest({ page: 1, limit: event.target.value }));
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    dispatch(getAllProductsRequest({ page: page + 1, limit, sortBy: property, orderBy: isAsc ? 'desc' : 'asc' }));
  };

  return (
    <Container maxWidth={false}>
      <Typography component='h1' variant='h5'>
        {isFirstLoading ? <Skeleton /> : 'ProductsPreview'}
      </Typography>

      {isFirstLoading ? (
        <Skeleton />
      ) : products.length ? (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <EnhancedTableProps order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
              <TableBody>
                {products.map((row: any) => (
                  <TableRow key={row._id}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.unit}</TableCell>
                    <TableCell align='right'>{(row.price || 0) / 100}</TableCell>
                    <TableCell align='right'>{row.description}</TableCell>
                    <TableCell align='right'>{row.createdAt}</TableCell>
                    <TableCell align='right'>{row.updatedAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={totalPages}
            rowsPerPage={limit}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      ) : (
        'Not found'
      )}
    </Container>
  );
}
