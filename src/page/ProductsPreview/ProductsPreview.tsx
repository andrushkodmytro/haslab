import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Product() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Toolbar />
      ProductsPreview
    </main>
  );
}
