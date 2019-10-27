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

                <Grid item sm={12} lg={3} md={6}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6}>
                    <CardMaze />
                </Grid>

            </Grid>
        </div>
    )
}


export default projects;