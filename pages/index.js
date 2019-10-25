//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//Dev Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import Drawer from "../components/drawer"
import Paper from "../components/introPaper"
import Social from "../components/socialDisplay"


//Content

let intro = ["Never forget to import fun!", "Hello world! Welcome visitors from foreign lands. This place is a real mismatch of stuff right now. Its definitly a work in progress. Feel free to explore the place. Most things won't bite!"];

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

let index = () => {

    const classes = useStyles();

return(
    <div className={classes.root}>
        <Head />
        <Grid container  alignItems="center" spacing={0}>
            <Grid item xs={12}>
                <Navbar type="static"/>
            </Grid>

            <Grid item xs={4}>
            <img src="/static/imgs/Stylised.png" width="95%" height="100%"/>
            </Grid>

            <Grid item xs={8}>
                <Paper content={intro}/>
            </Grid>
            
            
        </Grid>
    </div>
)

}



export default index;