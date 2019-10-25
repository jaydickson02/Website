//Material
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//Components
import Social from "../components/socialDisplay"

//Next 


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography component="p">
         <h1>{props.content[0]}</h1> 
          {props.content[1]}
          <Social />
        </Typography>
      </Paper>
    </div>
  );
}