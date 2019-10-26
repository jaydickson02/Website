//Material
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//Components
import PostBoard from "../components/blog/postBoard"
import Navbar from "../components/navbar"
//Next

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2,1)
    },
  }));

let blog = () => {

    const classes = useStyles();

    return(
        <div>
            <Navbar page={1}/>
            <PostBoard />
        </div>
    )
}


export default blog;

//Gonna have to have a get inital props