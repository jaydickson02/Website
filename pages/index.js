//Material UI Components
import Grid from '@material-ui/core/Grid';

//Dev Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import Drawer from "../components/drawer"
import Paper from "../components/paper"



//Content

let aboutMe = "hey";

let styles = {

    backgroundColor: "rgb(12, 94, 166)"
}

let index = () => {

return(
    <div>
        <Head />

        <body style={styles}>
        <Navbar type="static"/>
        <Grid container  alignItems="center" spacing={0}>

            <Grid item xs={4}>
                <img src="/static/imgs/Stylised.png" width="100%" height="100%"/>
            </Grid>

            <Grid item xs={8}>

                <Paper content={aboutMe}/>
            </Grid>

        </Grid>
        </body>
    </div>
)

}



export default index;