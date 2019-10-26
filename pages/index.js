import React from 'react';

//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import Drawer from "../components/drawer"
import Social from "../components/socialDisplay"
import Clock from "../components/clock"
import TextAnimation from "../components/textAnimation"

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
        padding: theme.spacing(8, 2)
        
    },
    wrapper:{
        height: '100vh',
        backgroundImage: "url('/backgrounds/dot-grid.png')"
    },
    socialPadding: {
        padding: theme.spacing(0, 2)
    }
  }));


let index = () => {
    const classes = useStyles()
    

return(
    <div>
        <Head />
        <Box className={classes.wrapper}>
        <Navbar />

        <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12}>
                <Box className={classes.headPlate}>
                        <Typography variant='h1' align='center' gutterBottom>
                            Jay Dickson
                        </Typography>
                        <Typography variant='h5' align='center' gutterBottom>
                            Developing with
                        </Typography>
                        <Typography variant='h3' align='center' gutterBottom>
                           <b><TextAnimation /></b>
                        </Typography>
                        <Typography variant='h6' align='center' gutterBottom>
                            Check out my projects!
                        </Typography>
                        
                        

                        
                </Box>
            </Grid>

            <Grid item xs={12}>
            <Typography variant='h1' align='center' gutterBottom>
                <Box component="span" className={classes.socialPadding}>
                
                        <a href='http://github.com/jaydickson02'>
                            <img src="/socialLogos/GitHub-Mark-120px-plus.png" width="64px" height="64px"/>
                        </a>
                    
                </Box>
                
                <Box component="span" className={classes.socialPadding}>
                        <a href='https://twitter.com/Jaymonkey01'>
                            <img src="/socialLogos/Twitter_Logo_Blue.png" width="64px" height="64px"/>
                        </a>
                </Box>
            </Typography>
            </Grid>

        </Grid>
        </Box>
        
    </div>
)
}



export default index;