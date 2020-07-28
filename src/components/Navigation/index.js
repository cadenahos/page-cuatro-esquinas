import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import useStyles from '../MaterialUiStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function  Navigation() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Tabs >
        <Tab label= "Entrar" className={classes.flex} component={Link} to={ROUTES.SIGN_IN} />
        <Tab label= "Landing" className={classes.flex} component={Link} to={ROUTES.LANDING} />
        <Tab label= "Principal" className={classes.flex} component={Link} to={ROUTES.HOME} />
        <Tab label= "Cuenta" className={classes.flex} component={Link} to={ROUTES.ACCOUNT} />
        <Tab label= "Administrador"  className={classes.flex} component={Link} to={ROUTES.ADMIN} />
        </Tabs >
    </AppBar>
  );
}
