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
import { resetOrderPreviewPage, getOrdersRequest } from './ordersPreviewReducer';
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

export default function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersRequest());
    return () => {
      dispatch(resetOrderPreviewPage());
    };
  }, [dispatch]);

  const { orders, isFirstLoading, isLoading } = useSelector((state: RootState) => state.ordersPreview);

  const total = (orders.data?.orderItems || []).reduce((res: number, curr: any) => {
    // return res += curr.
    console.log(curr)
  }, 0);

  return (
    <Container maxWidth={false}>
      <Typography component='h1' variant='h5'>
        Orders Preview
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>status</TableCell>
              <TableCell align='right'>Total</TableCell>
              <TableCell align='right'>Client</TableCell>
              <TableCell align='right'>Create date</TableCell>
              <TableCell align='right'>Update date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.data.map((row: any) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {row._id}
                </TableCell>
                <TableCell align='right'>{row.status}</TableCell>
                <TableCell align='right'>{(row.total || 0) / 100}</TableCell>
                <TableCell align='right'>{row.client}</TableCell>
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
