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
        text: `He gives the best Belly Rubs.`,
        author: `-Scout the Dog`,
    },
    {
        text: `He is just the Best ever. `,
        author: `-Mom`,
    },
    {
        text: `Pierce Morrill was my intern at the Dallas County Democratic Party. His patience and positive attitude made him an absolute pleasure to work with.  When it comes to work, there was no job too small or insignificant; he accomplished every goal diligently with a smile on his face. He took initiative on many projects and was a great team player. Pierce had no problem talking to voters and other activists that visited our office. He has an uncanny ability to build relationships and make others feel comfortable. His creativity and ability to think outside of the box really brought insight and efficiency to the way we did things. I would love to involve Pierce in any project or initiative I have in the future. `,
        author: `-Chris Nguyen, `,
    },{
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
        height: 50,
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
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1
        }));
    };


    handleBack = () => {
        this.setState(prevState => ({   
          activeStep: prevState.activeStep - 1,
        }));
      };

    render(){
        const { classes } = this.props;
        const { activeStep } = this.state;
        const maxSteps = testimonials.length;

        return (

        <div className= { classes.root }>
            <Card>
                <Paper square elevation={0} className={classes.header}>
                    <Typography> {testimonials[activeStep].text}  < br/> {testimonials[activeStep].author} </Typography>
                </Paper>

                <MobileStepper
                    steps={maxSteps}
                    position='static'
                    activeStep={activeStep}
                    className={classes.MobileStepper}
                    nextButton={
                        <Button  size='large' onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next 
                        </Button>
                    }
                    backButton={
                        <Button  size='large' onClick={this.handleBack} disabled={activeStep === 0}>
                            Back 
                        </Button>
                    }
                />
            </Card>

        </div>

        )
    }
}//carsel

Carsel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true})(Carsel);