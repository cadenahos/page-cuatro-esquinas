import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import AppBar from 'material-ui/core/AppBar';
import Toolbar from 'material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from 'material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/More';

const Navigation = () => (
    <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>

      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>

      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>

      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>

      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>

    </ul>

    </div>
);

export default Navigation;
