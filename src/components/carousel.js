import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const testimonials= [
    {
        text: `He gives the best Belly Rubs.`,
        author: `Scout the Dog`,
    },
    {
        text: `He is just the Best ever. `,
        author: `Mom`,
    },
    {
        text: `Pierce Morrill was my intern at the Dallas County Democratic Party. His patience and positive attitude made him an absolute pleasure to work with.  When it comes to work, there was no job too small or insignificant; he accomplished every goal diligently with a smile on his face. He took initiative on many projects and was a great team player. Pierce had no problem talking to voters and other activists that visited our office. He has an uncanny ability to build relationships and make others feel comfortable. His creativity and ability to think outside of the box really brought insight and efficiency to the way we did things. I would love to involve Pierce in any project or initiative I have in the future. `,
        author: `Chris Nguyen`,
    },
];

const styles = theme => ({
    root: { 
        maxWidth: 400,
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
            activeStep: prevState.activeStep -1
        }));
    };

    render(){
        const {classes, theme} = this.props;
        const { activeStep } =this.state;

        const maxSteps = testimonials.length;

        return (
            <div className= { classes.root}>
                <Paper square eleation={0} className={classes.header}>
                    <Typography> {testimonials[activeStep].text}  < br/> {testimonials[activeStep].author} </Typography>
                </Paper>
                <MobileStepper
                    steps={maxSteps}
                    position='static'
                    activeStep={activeStep}
                    className={classes.MobileStepper}
                    nextButton={
                        <Button size='small' onClick={this.handleNext} disabled={activeStep === maxSteps -1}>
                            Next 
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size='small' onClick={this.handleBack} disabled={activeStep === 0}>
                            Next 
                            {theme.direction === 'rtl' ?  <KeyboardArrowRight /> : <KeyboardArrowLeft /> }
                        </Button>
                    }
                />
            </div>
        )
    }
}//carsel

Carsel.PropTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withThem: true})(Carsel);