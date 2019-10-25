//Material
import Grid from '@material-ui/core/Grid';

//Next
import Link from 'next/link';

let socialDisplay = () => {
    return(
        <div>
            <Grid container  alignItems="center" spacing={2}>
                <Grid item xs={6}>
                    <Link href='http://github.com/jaydickson02'><a><img src="static/socialLogos/GitHub-Mark-120px-plus.png" width="64px" height="64px"/></a></Link>
                </Grid>
                <Grid item xs={6}>
                <Link href='https://twitter.com/Jaymonkey01'><a><img src="static/socialLogos/Twitter_Logo_Blue.png" width="64px" height="64px"/></a></Link>
                </Grid>

            </Grid>
        </div>
    )
}


export default socialDisplay;