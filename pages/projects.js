//Material UI Components
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//Components
import Navbar from "../components/navbar"
import CardSnake from "../components/projects/cardSnake"
import CardMaze from "../components/projects/cardMaze"
import Meta from '../components/headSEO'

//Next
import Link from 'next/link'

//Analytics
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2, 0),
    },

  }));

let projects = () => {

    

    const classes = useStyles();

    return(
        <Layout>
        
        <div>
            <Meta title={'Projects | Jay Dickson'} 
            desc={"Check out some of the projects and work I have done as a independant developer."}/>
            <Navbar page={0}/>

            <Grid 
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center">

                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardMaze />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardSnake />
                </Grid>
                <Grid item sm={12} lg={3} md={6} xl={2}>
                    <CardMaze />
                </Grid>

            </Grid>
        </div>
        </Layout>
    )
}


export default projects;