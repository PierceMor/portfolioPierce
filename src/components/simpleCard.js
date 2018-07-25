import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = {
    root: {
        alignItem: 'center',
        flexGrow: 1,
        position: 'relative',
        padding: 25,

    },
    card: {
        width: '28%',
        float: 'left',
        position: 'static',
        marginRight: '2.6%',
        marginLeft: '2.6%',
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props){
    const { classes } = props;

    return (
        <div>
            <Grid className={classes.root} spacing={12}>
                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textsecondary">
                            Word of the day
                        </Typography>

                        <Typography variant='headline' component='h2' >
                            Skills
                        </Typography>

                        <Typography className={classes.pos} color='textSecondary' >
                        All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
                        </Typography>

                    </CardContent>
                </Card> 

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textsecondary">
                            Word of the day
                        </Typography>

                        <Typography variant='headline' component='h2' >
                            Skills
                        </Typography>

                        <Typography className={classes.pos} color='textSecondary' >
                        All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
                        </Typography>

                    </CardContent>
                </Card> 

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textsecondary">
                            Word of the day
                        </Typography>

                        <Typography variant='headline' component='h2' >
                            Skills
                        </Typography>

                        <Typography className={classes.pos} color='textSecondary' >
                        All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
                        </Typography>

                    </CardContent>
                </Card> 

            </Grid>
        </div> 
    );// return
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);