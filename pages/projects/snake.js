
import React from 'react';

//Components
import Navbar from "../../components/navbar"
import {loadableP5 as P5Wrapper} from '../../components/loadableP5'
import sketch from '../../p5Sketches/P5Snake'

//Material
import Typography from '@material-ui/core/Typography';

class test extends React.Component{

    render(){
        return(
        <div>
            <Navbar page={0}/>
            <Typography variant='h1' align='center' gutterBottom>
                <P5Wrapper sketch={sketch}/>    
            </Typography>
            <Typography variant='h5' align='center' gutterBottom>
                One of my earliest projects. A fun (although pretty bad) version of snake. With a score counter and all! 
            </Typography>
            
            
        </div>
        )
    }
}

export default test