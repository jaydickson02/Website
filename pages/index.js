//Material UI Components
import Grid from '@material-ui/core/Grid';

//Dev Components
import Navbar from "../components/navbar"
import Head from "../components/head"
import Drawer from "../components/drawer"
import Paper from "../components/paper"

let index = () => {

return(
    <div>
        <Head />

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Navbar type="static"/>
            </Grid>

            <Grid item xs={4}>
                <img src="/static/imgs/Stylised.png" width="100%" height="100%"/>
            </Grid>

            <Grid item xs={8}>
                <Paper />
            </Grid>
        </Grid>
    </div>
)

}



export default index;