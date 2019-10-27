import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme =>({
 
  padding: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
   height: '250px',
   width: '345px'
  }
 


}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.padding}>
        <Link href="/projects/snake">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image of the game snake"
          height="140"
          image="/projectThumbnails/snakeThumbnail.png"
          title="Snake"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Snake
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           A replica of the classic game: Snake. Written using the P5.js Library.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      </Paper>

    </div>
  );
}