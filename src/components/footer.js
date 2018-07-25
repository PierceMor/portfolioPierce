import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import GitHub from '../img/GitHub.png';
import LinkedIn from '../img/LinkedIn.png';


const Links ={
    src:[
    'https://www.linkedin.com/in/pierce-morrill/',
    'https://github.com/PierceMor',
]
}

const styles ={
    palette: {
        type: 'dark',
    },
    root : {
        zIndex: 1,
        textAlign: 'center',
        position: 'sticky',
        width: '100%',
        bottom: 0,
    },  
    button : {
        width: '100%',
        backGroundColor: 'blue',
    },
    list : {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class Footer extends React.Component {

    state = {
        bottom: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.fullList}>
                <List>{Links.src }</List>
                
            </div>
        );//sideList

        return (
            <div className={classes.root} >

                <Button className={classes.button} onClick={this.toggleDrawer('bottom',true)}>Message Me Cat Pictures!</Button>

                <Drawer anchor='bottom' open={this.state.bottom} onClose={this.toggleDrawer('bottom',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('bottom',false)}
                    onKeyDown={this.toggleDrawer('bottom',false)}
                    >
                        <Button className={classes.button} >
                        </Button>
                    </div>
                </Drawer>

            </div>

        )///return
    }//render
}//Footer

Footer.propTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);