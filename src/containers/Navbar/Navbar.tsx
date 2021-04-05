import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BallotIcon from '@material-ui/icons/Ballot';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  let history = useHistory();

  const { loggedIn } = useSelector((state: RootState) => state.signIn);

  const [openProducts, setOpenProducts] = React.useState(false);
  const [openOrders, setOpenOrders] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState(false);

  const productHandler = () => {
    setOpenProducts(!openProducts);
  };

  const categoryHandler = () => {
    setOpenCategories(!openCategories);
  };

  const orderHandler = () => {
    setOpenOrders(!openOrders);
  };

  const newProduct = () => {
    history.push('/products/new');
  };

  const products = () => {
    history.push('/products');
  };

  const newCategory = () => {
    history.push('/categories/new');
  };

  const category = () => {
    history.push('/categories');
  };

  const newOrders = () => {
    history.push('/orders/new');
  };

  const orders = () => {
    history.push('/orders');
  };

  return (
    <>
      {loggedIn ? (
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor='left'
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem button onClick={orderHandler}>
              <Avatar>N</Avatar>
              <div>
                <p>Jane Rotanson</p>
                <p>Admin</p>
              </div>
            </ListItem>
            <Divider />
            <ListItem button onClick={productHandler}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Products' />
              {openProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProducts} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={products}>
                  <ListItemText inset primary='List Products' />
                </ListItem>
              </List>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={newProduct}>
                  <ListItemText inset primary='Create Product' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={categoryHandler}>
              <ListItemIcon>
                <BallotIcon />
              </ListItemIcon>
              <ListItemText primary='Categories' />
              {openCategories ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCategories} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={category}>
                  <ListItemText inset primary='List Categories' />
                </ListItem>
              </List>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={newCategory}>
                  <ListItemText inset primary='Create Category' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={orderHandler}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary='Orders' />
              {openOrders ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openOrders} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={orders}>
                  <ListItemText inset primary='List Orders' />
                </ListItem>
              </List>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested} onClick={newOrders}>
                  <ListItemText inset primary='Create Order' />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      ) : null}
    </>
  );
}
