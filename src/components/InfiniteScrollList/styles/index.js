import { makeStyles } from '@material-ui/core';

export default makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  listContent: {
    height: '100%',
    overflow: 'scroll',
    flex: 1,
  },
});
