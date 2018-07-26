import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProfessionalPic from '../img/ProfessionalPic.jpg';
import Grid from '@material-ui/core/Grid';
import Carsel from './carousel.js';

const styles = () => ({
    palette: {
        theme: 'dark',
    },
    root: {
        flexGrow: 1,
        margin: '2.6%',
        position: 'relative',
        padding: 25,
        
    },
    card: {
        margin: 6,
        display: 'flex',
        textAlign: 'left',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    pic: {
        width: 320,
        height: 320,
        margin: 25,
        
    },
});

function MediaCard(props) {
  const { classes } = props;

  return (
    <Grid className={classes.root} spacing={12}>
      <Card className={classes.card}>

      <Grid item xs={2}>
      </Grid>

        <Grid item xs={12}>
            <CardMedia
                className={classes.pic}          
                image={ProfessionalPic}
                title="Pierce Morrill being Professional"
            />
        </Grid>

        <Grid item xs={12}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="headline">
                        Pierce Morrill
                    </Typography>
                    
                    <Typography variant="subheading"     color="textSecondary">
                        My name is Pierce Morrill, I a refugee from Dallas trying to make a life for myself in the great land of Austin. My Academic career was focused primarily on Anthropology, Linguistics, and German Studies. After School I began to look for something more meaningful and I became a bit stranded just waiting tables for a while. I came to Austin last year to work as a translator for a gaming company. 
                    </Typography>
                </CardContent>
            </div>

           <Carsel />
        </Grid>

        <Grid item xs={2}>
        </Grid>

      </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaCard);