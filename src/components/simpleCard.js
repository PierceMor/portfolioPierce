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
        overflow: 'auto',
    },
    card: {
        width: '28%',
        float: 'left',
        position: 'static',
        textAlign: 'center',
        marginRight: '2.6%',
        marginLeft: '2.6%',
        height: 350,
        overflow: 'auto',
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

};

function SimpleCard(props){
    const { classes } = props;

    return (
        <div id="style1">
            <Grid className={classes.root} >

                <Card className={classes.card} id="scrollbar">
                    <CardContent >

                        <Typography variant='headline' component='h2' >
                            Services
                        </Typography>

                        <Typography   >

                            - Product Specialist -
                            <br /> While with Facebook I was supporting multiple internal dev tools, this role combined my customer service skills and hard skills as a junior Developer. 
                            <br /><br />

                            - Frontend Developer -
                            <br /> Being a Frontend Developer combines my love for technology and languages. 
                            <br /><br />

                            - German Translator -
                            <br /> I love the challenge and pure joy your get from connecting two different cultural worlds
                            <br /><br />

                            - Animal Services - 
                            <br /> We have fostered dozens of different Dogs and Cats over the years, so if you need a pet, I am your connection
                        </Typography>

                    </CardContent>
                </Card> 


                <Card className={classes.card} id="scrollbar">
                    <CardContent>

                        <Typography variant='headline' component='h2' >
                            Passions
                            
                        </Typography>

                        <Typography className={classes.title}  >
                           - Development -
                            <br/>   
                                I have just started my Journay as a Full Stack Developer
                            <br/>
                            <br/>
                            - Brazilian Jiu Jitsu -
                            <br/>   
                                I have been training since 2014. 
                            <br/>
                            <br/>
                            - Video Games -
                            <br/>   
                                Gaming has always been a part of my life, ever since playing Starcraft as a Kid
                            <br/>
                            <br/>
                            - Linguistics -
                            <br/>   
                                Languages have always fascinated me with how they define our way of thinking 
                            <br/>
                            <br/>
                        </Typography>

                    </CardContent>
                </Card> 


                <Card className={classes.card} id="scrollbar">
                    <CardContent>

                        <Typography variant='headline' component='h2' >
                            Skills
                        </Typography>

                        <Typography className={classes.title}  >
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