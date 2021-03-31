import { useDispatch, useSelector } from 'react-redux';
import MuiSnackbar from '@material-ui/core/Snackbar';
import { snackbarClear } from 'reducers/ui';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { RootState } from 'store';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      minWidth: '400px',
      maxWidth: '600px',
    },
  })
);

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function Snackbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { snackbarOpen, snackbarMessage, snackbarType } = useSelector((state: RootState) => state.ui);

  function handleClose() {
    dispatch(snackbarClear());
  }

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={snackbarOpen}
      autoHideDuration={100000}
      onClose={handleClose}
      aria-describedby='client-snackbar'
    >
      <Alert variant='filled' className={classes.alert} onClose={handleClose} severity={snackbarType}>
        {snackbarMessage}
      </Alert>
    </MuiSnackbar>
  );
}
