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
        textAlign: 'center',
        marginRight: '2.6%',
        marginLeft: '2.6%',
        height: 350,
    },
    h2: {
        underLine: 'solid'
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

                        <Typography variant='headline' component='h2' >
                            Services
                        </Typography>

                        <Typography className={classes.pos} color='textPrimary' >
                            - Front-end Developer -
                            <br /> I enjoy coding things from scratch, making Ideas jump and grab your attention 
                            <br /><br />

                            - German Translator -
                            <br /> I love the challenge and pure joy your get from connecting two different cultural worlds
                            <br /><br />

                            - Animal Services - 
                            <br /> We have fostered dozens of different Dogs and Cats over the years, so if you need a pet, I am your connection
                        </Typography>

                    </CardContent>
                </Card> 


                <Card className={classes.card}>
                    <CardContent>

                        <Typography variant='headline' component='h2' >
                            Passions
                            
                        </Typography>

                        <Typography className={classes.title} color='textPrimary' >
                           - Development -
                            <br/>   I have just started my Journay as a Full Stack Developer
                            <br/><br/>
                            - Brazilian Jiu Jitsu -
                            <br/>   I have been training for about 4 years nows
                            <br/><br/>
                            - Video Games -
                            <br/>   Gaming has always been a part of my life, ever since playing Starcraft as a Kid
                            <br/><br/>
                            - Linguistics -
                            <br/>   Languages have always fascinated me with how they define our way of thinking 
                            <br/><br/>
                        </Typography>

                    </CardContent>
                </Card> 


                <Card className={classes.card}>
                    <CardContent>

                        <Typography variant='headline' component='h2' >
                            Skills
                        </Typography>

                        <Typography className={classes.title} color='textPrimary' >
                        React.JS
                        <br/>
                        Angular.JS
                        <br/>
                        Express
                        <br/>
                        Javascript/Jquery
                        <br/>
                        MySQL
                        <br/>
                        Sequelize
                        <br/>
                        MongoDB
                        <br/>
                        Deployment (Git)
                        <br/>
                        CSS
                        <br/>
                        HTML
                        <br/>
                        Node.js
                        <br/>
                        Customer Relations
                        <br/>
                        German Language

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