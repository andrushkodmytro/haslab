import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);
export default function Navbar() {
  const classes = useStyles();

  const [openProducts, setOpenProducts] = React.useState(false);
  const [openOrders, setOpenOrders] = React.useState(false);

  const productHandler = () => {
    setOpenProducts(!openProducts);
  };

  const orderHandler = () => {
    setOpenOrders(!openOrders);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />

      <ListItem button onClick={productHandler}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Products' />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText inset primary='List Products' />
          </ListItem>
        </List>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText inset primary='Create Product' />
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
          <ListItem button className={classes.nested}>
            <ListItemText inset primary='List Orders' />
          </ListItem>
        </List>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText inset primary='Create Order' />
          </ListItem>
        </List>
      </Collapse>

      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
}
