import React from 'react';

//MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Next
import Link from 'next/link';

//Components
//import NavName from '../components/resizeNavName'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pad: {
    padding: theme.spacing(6,1)
  },
  navButtons: {
    margin: '16px'
  }
  
}));


export default function ButtonAppBar(props) { //Pass fixed or static to props
  const classes = useStyles();
  const theme = useTheme();
  
  let projectsColour = 'inherit'
  let blogColour = 'inherit'
  let homeColour = 'inherit'

  switch(props.page) {
    case 0:
      projectsColour = 'primary'
      break;
    case 1:
      blogColour = 'primary'
      break;
    case 2:
      homeColour = 'primary'
      break;
  }

    const xtraSmall = useMediaQuery(theme.breakpoints.down('xs'))
    
    let navName = 'Jay Dickson';
    let nameSize = 'h6'

    if(xtraSmall){ //Xtra small
        navName = 'Home'
        nameSize = 'body1'
    }


  return (
    <div className={classes.root}>
      <AppBar position={props.type} color="default">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="/">
            <Button color={homeColour}>
              <Typography variant={nameSize} className={classes.title}>
                {navName}
              </Typography>
            </Button>
          </Link>
          </Typography>

          <Link href="/projects">
            <Button color={projectsColour}>Projects</Button>
          </Link>
          <Link href="/blog">
            <Button color={blogColour}>Blog</Button>
          </Link>
          <Link href="/login">
          <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    <Box className={classes.pad}></Box>
    </div>
  );
}