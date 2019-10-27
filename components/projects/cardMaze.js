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

const useStyles = makeStyles(theme =>({
  card: {
    maxWidth: 345
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
        <Link href="/projects/maze">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image of maze"
          height="140"
          image="/projectThumbnails/mazeThumbnail.png"
          title="Maze"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Maze
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           An auto-generating maze.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
     
    </Card>
    </div>
  );
}