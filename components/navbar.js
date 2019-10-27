import React from 'react';

//MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

//Next
import Link from 'next/link';

//Components
import NavName from '../components/resizeNavName'



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
  
  let projectsColour = 'inherit'
  let blogColour = 'inherit'

  switch(props.page) {
    case 0:
      projectsColour = 'primary'
      break;
    case 1:
      blogColour = 'primary'
      break;
  }


  return (
    <div className={classes.root}>
      <AppBar position={props.type} color="default">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="/">
            <Button>
              <Typography variant={'h6'} className={classes.title}>
                <NavName />
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