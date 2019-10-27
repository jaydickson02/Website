
import React from 'react';

//Components
import Navbar from "../../components/navbar"
import {loadableP5 as P5Wrapper} from "../../utils/loadableP5"
import sketch from "../../p5Sketches/P5Maze"
import ProjectText from "../../components/projects/projectText"

//Material
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//Analytics
import Layout from '../../components/layout'

class test extends React.Component{

    render(){

        return(
        <Layout>
        <div>
            <Navbar page={0}/>
            <Typography variant='h1' align='center' gutterBottom>
                <P5Wrapper sketch={sketch}/>    
            </Typography>
            
           <ProjectText content={"A simple maze generation program. Using Prim's algorithm as its basis. Prims algorithm consists of a few simple rules. From these rules emerges complexity in the form of a complete maze. Wikipedia article: "} link={"https://en.wikipedia.org/wiki/Prim's_algorithm"}/>
                
        </div>
        </Layout>
        )
    }
}

export default test;