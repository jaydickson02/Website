//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import Drawer from "../components/drawer"
import Social from "../components/socialDisplay"

//Material
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



//Next
import Link from 'next/link';

//let intro = ["Never forget to import fun!", "Hello world! Welcome visitors from foreign lands. This place is a real mismatch of stuff right now. Its definitly a work in progress. Feel free to explore the place. Most things won't bite!"]

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(20, 2),
      
    },
    headPlate: {
        padding: theme.spacing(10, 2)
    },
    wrapper:{
        height: '100vh'
    },
    socialPadding: {
        padding: theme.spacing(2, 2)
    }
  }));

let index = () => {

    const classes = useStyles();

return(
    <div>
        <Head />
        <Box className={classes.wrapper}>
        <Navbar />

        <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12}>
                <Box className={classes.headPlate}>
                        <Typography variant='h1' align='center' gutterBottom>
                            Jay Dickson
                        </Typography>
                        <Typography variant='h4' align='center' gutterBottom>
                            The website of champions!
                        </Typography>
                        <Typography variant='h5' align='center' gutterBottom>
                            Check out my projects!
                        </Typography>
                </Box>
            </Grid>

            <Grid item xs={12}>
            <Typography variant='h1' align='center' gutterBottom>
                <Box component="span" className={classes.socialPadding}>
                    <Link href='http://github.com/jaydickson02'>
                        <a>
                            <img src="static/socialLogos/GitHub-Mark-120px-plus.png" width="64px" height="64px"/>
                        </a>
                    </Link>
                </Box>
                
                <Box component="span" className={classes.socialPadding}>
                    <Link href='https://twitter.com/Jaymonkey01'>
                        <a>
                            <img src="static/socialLogos/Twitter_Logo_Blue.png" width="64px" height="64px"/>
                        </a>
                    </Link>
                </Box>
            </Typography>
            </Grid>

        </Grid>
        </Box>

        <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <Typography variant='h1' align='center' gutterBottom>
                        Testing 123
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <Typography variant='h1' align='center' gutterBottom>
                        Testing 123
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <Typography variant='h1' align='center' gutterBottom>
                        Testing 123
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        
    </div>
)

}



export default index;