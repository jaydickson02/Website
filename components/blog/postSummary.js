//Next
import Link from "next/link";

//Components

//Material
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 2),
        margin: theme.spacing(2,12)
    },
  }));

let postSummary = (props) => {
    const classes = useStyles();

    let content = props.content;
    

    return(
        <div>
            
            <Paper className={classes.root}>
                <Typography variant="h1" align="center" gutterBottom>
                    <Link href="blogpost">
                        <Button>
                        <Typography variant="h2" align="center" gutterBottom>
                            {content.title}
                        </Typography>
                        </Button>
                    </Link>
                </Typography>

                <Typography variant="h4" align="center" gutterBottom>
                    {content.body}
                </Typography>

                <Typography variant="h5" align="center" gutterBottom>
                    {content.author}
                </Typography>
            </Paper>
        </div>
    )//Remove the p tag. Don't need content here. This is a summary
}

export default postSummary;