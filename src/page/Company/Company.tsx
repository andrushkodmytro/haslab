import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyRequest } from './companyReducer';
import { RootState } from 'store';
import Container from 'components/ui/Container/Container';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { useForm, Controller } from 'react-hook-form';
// import { EMAIL_REGEX } from 'utils/constants';
// import UploadButtons from 'components/ui/UploadsButton';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Grid from '@material-ui/core/Grid';

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
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
    },
  })
);

const orders = [
  {
    _id: '1212',
    name: 'Company 1',
    user: 'User1',
  },
];

export default function Company() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyRequest());
    return () => {
      // dispatch(resetOrderPreviewPage());
    };
  }, [dispatch]);

  const { allCompanies } = useSelector((state: RootState) => state.company);

  return (
    <Container maxWidth='md'>
      <div className={classes.titleContainer}>
        <Typography component='h2' variant='h5'>
          Your companies
        </Typography>
        <Button type='submit' variant='contained' color='primary' size='large'>
          Create company
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>User</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((row: any, index: number) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography component='h2' variant='h5'>
        All companies companies
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='left'>User</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allCompanies.map((row: any, index: number) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
