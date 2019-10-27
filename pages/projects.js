//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import CardSnake from "../components/projects/cardSnake"
import CardMaze from "../components/projects/cardMaze"

//Next
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2, 0),
    },

    wrapper: {
        height: '100vh'
    },

   CardStyle: {
       //margin: theme.spacing(2,2),
        padding: theme.spacing(2, 0),
       /* marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 0,
        width: '345px',*/
    },

    wrapper: {
        textAlign: 'center'
    }
  }));

let projects = () => {

    const classes = useStyles();

    return(
        <div>
            <Head />
            <Navbar page={0}/>

            <Grid 
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center">

                <Grid item sm={12} lg={4} md={6}>
                    <Box className={classes.wrapper}>
                    <div display='blockInline' className={classes.CardStyle}>
                    <CardSnake />
                    </div>
                    </Box>
                </Grid>

                <Grid item sm={12} lg={4} md={6}>
                    <Box display='blockInline' className={classes.CardStyle}>
                    <CardMaze />
                    </Box>
                </Grid>

                <Grid item sm={12} lg={4} md={6}>
                    <Box display='blockInline' className={classes.CardStyle}>
                    <CardMaze />
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}


export default projects;