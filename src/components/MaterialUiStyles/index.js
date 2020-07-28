
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => statement =>({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  tabContent: {
    padding: theme.spacing.unit * 2,
  },
  toolbarMargin: theme.mixins.toolbar,
}));

export default useStyles;
