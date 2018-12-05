import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import staffD from '../img/staffD2.JPG';
import burgerEater from '../img/burgerEater.JPG';
import baby from '../img/baby.JPG';
import animal from '../img/animal.JPG';
import endGame from "../img/endGame.JPG";
import woofle from "../img/woofle.JPG";
import cartBuilder from "../img/cartBuilder.JPG";


const styles = theme => ({
    root: {
        display: 'flex',
        felxWrap: 'wrap',
        justifyContent: 'space-around',
        overFlow: 'hidden',
    },
    gridList : {
        width: '80%',
        height: 700,
    },
    header: {
        textAlign: 'center',
        text: 50,
    },
});

const examples = [
    {
        img: cartBuilder,
        language: [
            'node',
            'Javascript'
        ],
        title: 'DIY Cart Builder',
        link: 'https://github.com/patientplatypus/cart_builder',
        GitHub: 'https://github.com/patientplatypus/cart_builder',

    },
    {
        img: animal,
        language: [
            'node',
            'Javascript'
        ],
        title: 'Austin Animal Center Website',
        link: 'https://testproj-187418.firebaseapp.com/animals',
        GitHub: 'https://github.com/PierceMor/animal-shelter-adoption',

    },{
        img: endGame,
        language: [
            'node',
            'Javascript'
        ],
        title: 'EndGame - solving location errors for meetups',
        link: 'https://endgame2.herokuapp.com',
        GitHub: 'https://github.com/snavdeepsingh/EndGame'
    },{
        img: woofle,
        language: [
            'node',
            'Javascript'
        ],
        title: 'Woofle! Social App for dog owners',
        link: 'https://ut-project-1.firebaseapp.com/',
        GitHub: 'https://github.com/mattrmc1/Woofle-mock',
    },{
        img: staffD,
        language: [
            'node',
            'Javascript'
        ],
        title: 'StaffD - part-time staffing for events',
        link: 'https://immense-island-47348.herokuapp.com/',
        GitHub: 'https://github.com/GuyCPalmer/staffD',
    },{
        img: burgerEater,
        language: [
            'node',
            'Javascript'
        ],
        title: 'BurgerEater',
        link: 'https://desolate-falls-80787.herokuapp.com/',
        GitHub: 'https://github.com/PierceMor/burgerEating',

    },{
        img: baby,
        language: [
            'node',
            'Javascript'
        ],
        title: 'Dating App Survey',
        link: 'https://intense-wildwood-96130.herokuapp.com/survery',
        GitHub: 'https://github.com/PierceMor/datingApp',
    },
];

function Projects(props){
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key='subheader' cols={2} style = {{ height: 'auto'}}>
                </GridListTile>
                {examples.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            // subtitle={<span> Languages: {(tile.language).map()} </span>}
                            actionIcon={
                                <IconButton className={ classes.icon }>
                                    <a href={tile.GitHub}>
                                        <InfoIcon />
                                    </a>
                            
                                 
                                </IconButton>
                            }
                        />
                    </GridListTile>
                        
                ))}
                </GridList>

        </div>
    );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Projects);