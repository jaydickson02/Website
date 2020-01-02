//Material
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//Components
import PostBoard from "../components/blog/postBoard"
import Navbar from "../components/navbar"

//Next
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2,1)
    },
  }));

let blog = (props) => {

    const classes = useStyles();

    return(
        <div>
            <Navbar page={1}/>
            <PostBoard posts = {props.posts}/>
        </div>
    )
}


blog.getInitialProps = async () => {
    const res = await fetch('http://db.originalone.cloud/api/blog/all');
    const data = await res.json();

  return{posts: data};
}


export default blog;

//Gonna have to have a get inital props