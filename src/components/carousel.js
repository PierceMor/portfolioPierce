import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const testimonials= [
    {
        text: `Pierce Morrill  `,
        author: `-Chris Nguyen, `,
    },
    {
        text: `He gives the best Belly Rubs.`,
        author: `-Scout the Dog`,
    },
    {
        text: `He is just the Best ever. `,
        author: `-Mom`,
    },
    {
        text: `You can teach specific skills for a job, but you can't teach some one to be personable and enjoyable to work with. Pierce is intuitively good at interpersonal communication. While traits like enthusiasm and positivity can come off as hokey or irritating, Pierce's combination of authenticity and exceptional social skills render them delightful and motivating. Also, he codes good.`,
        author: `-Jen Pennington, `,

    },
];



const styles = theme => ({
    root: { 
        maxWidth: '100%',
        flexgrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 150,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 300,
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
      },
});



class Carsel extends React.Component {
    state = {
        activeStep: 0,
    };


    handleNext = () => {
        console.log( 'HandleNext being called');
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1
        }));
    };


    handleBack = () => {
        console.log( 'handleBack being called');

        this.setState(prevState => ({   
          activeStep: prevState.activeStep - 1,
        }));
      };

    render(){
        const { classes } = this.props;
        const { activeStep } = this.state;
        const maxSteps = testimonials.length ;
        const theme = createMuiTheme();
        return (

        <div className= { classes.root }>

            <MuiThemeProvider theme={theme}>

                <Paper square elevation={0} className={classes.header}>
                    <Typography> {testimonials[activeStep].text}  < br/> {testimonials[activeStep].author} </Typography>
                </Paper>

                <MobileStepper
                    steps={maxSteps}
                    position='static'
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button  size='large' onClick={this.handleNext} >
                            Next 
                        </Button>
                    }
                    backButton={
                        <Button  size='large' onClick={this.handleBack} >
                            Back 
                        </Button>
                    }
                />

      </MuiThemeProvider>


        </div>


        )
    }
}//carsel

Carsel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(Carsel);