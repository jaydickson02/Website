//Components
import PostSummary from "./postSummary"

//Material
import Grid from '@material-ui/core/Grid';

let testData = [

    {title: "How to code", body: "This is how you code. Its basically magic.", author: "Jay Dickson"},
    {title: "Why are you here?", body: "Probably something to do with teleportation?", author: "Billy Topnotch"},
    {title: "Pretty fly for a white guy", body: "But is he pretty white for a fly guy?", author: "Ben Farland"}

]


let postBoard = (props) => {
    let posts;
    if(props.data){ 
        posts = props.data.map(blog => 
    <Grid item xs={12}> 
        <PostSummary content = {blog.title} /> 
    </Grid>
    )
    } else {
        posts = "No Blog Posts Found";
    }

    return(

        <div>
            <Grid container  alignItems="center" spacing={0}>
                {posts}
            </Grid>
        </div>
    )
}

export default postBoard;


postBoard.getInitialProps = async function() {
    const res = await fetch('http://db.originalone.cloud/api/blog/all');
    const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return(data);
}