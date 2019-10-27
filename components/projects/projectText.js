
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(20, 10),
      margin: theme.spacing(2, 8)
    },
  }));

let projecttext = (props) => {

    const classes = useStyles()

    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant='h6' align='center' gutterBottom>
                    {props.content}
                    <a href='props.link'>Prims Algorithm</a>
                </Typography>
            </Paper>
        </div>
    )
}
export default projecttext;