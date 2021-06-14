import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
  searchs: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '40px',
    },
  searchb: {
    marginBottom: '10px',
    height: '50%',
    width: '50%',
    paddingLeft: '10px',
    },
}));
