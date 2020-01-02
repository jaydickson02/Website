//Material
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//Components
import PostBoard from "../components/blog/postBoard"
import Navbar from "../components/navbar"

import Meta from '../components/headSEO'

//Next
import fetch from 'isomorphic-unfetch';


//Analytics
import Layout from '../components/layout'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2,1)
    },
  }));


let blog = () => {
    
    const classes = useStyles();

    return(
        <Layout>
            <div>
            <Meta title={'Blog | Jay Dickson'} 
            desc={"Programming, Science and whatever else I feel like writing about. Find it all here."}/>
                <Navbar page={1}/>
                <PostBoard posts = {props.posts}/>
            </div>
        </Layout>
    )
}


blog.getInitialProps = async () => {
    const res = await fetch('https://db.originalone.cloud/api/blog/all');
    const data = await res.json();

  return{posts: data};
}


export default blog;

//Gonna have to have a get inital props