//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Components
import Navbar from "../components/navbar"
import Head from "../components/head"

//Next
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(20, 2),
      margin: "16px"
    },
    wrapper:{
        height: '100vh'
    },
  }));

let projects = () => {

    const classes = useStyles();

    return(
        <div>
            <Head />
            <Navbar page={0}/>

            <Grid container alignItems='center' spacing={0}>
                <Grid item xs={12}>
                    <Typography variant='h1' align='Center' className={classes.root}>
                        Under Construction!
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
}


export default projects;