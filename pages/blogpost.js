
//Make a variable html path
//TODO: Add get initial props

//Material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../components/navbar"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(20, 2),
      
    },
    headPlate: {
        padding: theme.spacing(20, 2)
        
    },
    wrapper:{
        height: '100vh'
    },
    socialPadding: {
        padding: theme.spacing(0, 2)
    }
  }));

let blogpost = (props) => {

    const classes = useStyles()

    //content = props.content;

    return(
        <div>
            <Box className={classes.wrapper}>
            <Navbar />
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12}>
                    <Box className={classes.headPlate}>
                            <Typography variant='h1' align='center' gutterBottom>
                                Under Construction
                            </Typography>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}


export default blogpost;