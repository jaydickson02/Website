import React from 'react';

//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Components
import Navbar from "../components/navbar"
import TextAnimation from "../components/animations/textAnimation"
import Meta from '../components/headSEO'

//Material
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Analytics
import Layout from '../components/layout'

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
        backgroundImage: "url('/backgrounds/dot-grid.png')",
        overflow: 'hidden'
    },
    socialPadding: {
        padding: theme.spacing(0, 2)
    },

    noScroll: {
        margin: 0,
        height: '100%',
        overflow: 'hidden',
    }
  }));


let index = () => {
    const classes = useStyles()

    const theme = useTheme();
    const xtraSmall = useMediaQuery(theme.breakpoints.down('xs'))
    
    let headingSize = 'h1';
    let label = 'h5';
    let animation = 'h3';
    let tag = 'h6';

    if(xtraSmall){ //Xtra small
        headingSize = 'h3'
        label = 'h6'
        animation = 'h4'
        tag = 'h6'
    }
    

return(
    <Layout>
    <div>
        <html className={classes.noScroll}>
        <body className={classes.noScroll}>
        <Meta title='Jay Dickson'
            desc="Location of all things Jay Dickson related. Enjoy your stay!"/>

        <Box className={classes.wrapper}>
            <Navbar page={2}/>

            <Grid container alignItems="center" spacing={0}>
                <Grid item xs={12}>
                    <Box className={classes.headPlate}>
                            <Typography variant={headingSize} align='center' gutterBottom>
                                Jay Dickson
                            </Typography>
                            <Typography variant={label} align='center' gutterBottom>
                                Developing with
                            </Typography>
                            <Typography variant={animation} align='center' gutterBottom>
                            <b><TextAnimation /></b>
                            </Typography>
                            <Typography variant={tag} align='center' gutterBottom>
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
        </body>
        </html>
    </div>
    </Layout>
)
}



export default index;