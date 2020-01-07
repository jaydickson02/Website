import Link from 'next/link';

//Material
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2,4),
        height: '300px',
        overflow: 'hidden'
    },

    text: {
        height: '100%',
        padding: theme.spacing(4,6)
    },

    image: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: '300px',
    },

    imageContainer: {
        margin: 0,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        height: '100%',
        width:'100%'
    },

    button: {
        padding: 0,
        width: '100%'
    }

  }));

  

let blogSummary = (props) => {

    const classes = useStyles();

    let content = props.content;

    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date.toDateString().slice(4);
      }

    return(

        //Todo: Add like and share buttons

        <div>
            <Paper className={classes.root}>
            <Link href={`/blog/${content.data.title}`}>
            <Button className={classes.button}>
            <Grid container alignItems="center" spacing={0}>

                <Grid item xs={3}>
                <figure className={classes.imageContainer}>
                        <img className={classes.image} src={content.data.hero_image}  height='100%'></img>
                </figure>
                </Grid>

                <Grid item xs={9} >
                    <div className={classes.text}>
                        <Typography variant="h4" align="center" gutterBottom>
                                    {content.data.title}
                        </Typography>

                        <Typography variant="body2" align="center" gutterBottom>
                            {content.data.description}
                        </Typography>

                        <Typography variant="overline" align="center" gutterBottom>
                            {reformatDate(content.data.date)}
                        </Typography>
                    </div>
                    
                </Grid>
            </Grid>
            </Button>
            </Link>
            </Paper>
            
        </div>
    )

}

export default blogSummary;
