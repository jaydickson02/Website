//Components
import PostSummary from "./postSummary"

//Material
import Grid from '@material-ui/core/Grid';



let postBoard = (props) => {
    
    let posts = props.posts.map

    (post => 
     <Grid key={post.title} item xs={12}> 
        <PostSummary content = {post} /> 
    </Grid>
    )
    

    return(

        <div>
            <Grid container  alignItems="center" spacing={0}>
                {posts}
            </Grid>
        </div>
    )
}

export default postBoard;


