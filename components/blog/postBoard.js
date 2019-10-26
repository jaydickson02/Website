//Components
import PostSummary from "./postSummary"

//Material
import Grid from '@material-ui/core/Grid';

let testData = [

    {title: "How to code", body: "This is how you code. Its basically magic.", author: "Jay Dickson"},
    {title: "Why are you here?", body: "Probably something to do with teleportation?", author: "Billy Topnotch"},
    {title: "Pretty fly for a white guy", body: "But is he pretty white for a fly guy?", author: "Ben Farland"}

]


let postBoard = () => {

    let posts = testData.map(x => 
    <Grid item xs={12}> 
        <PostSummary content = {x} /> 
    </Grid>
    )

    return(

        <div>
            <Grid container  alignItems="center" spacing={4}>
                {posts}
            </Grid>
        </div>
    )
}

export default postBoard;