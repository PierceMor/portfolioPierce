import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import LinkedIn from '../img/LinkedIn.png';
import GitHub from '../img/GitHub.png';
import gmail from '../img/gmail.png';

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
    menuButton: {
        marginLeft: 20,
        marginRight: 20,
        underLine: 'none',
        color: 'grey',
        itemAlign: 'center',

    },
    Drawer: {
        height: 90,
        itemAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    img: {
        height: 50,
        widht: 50,
        margin: 20,
        marginLeft: 60,
        marginRight: 60,
        float: 'center'
    }
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

        return (
            <div className={classes.root} >

                <Button className={classes.button} onClick={this.toggleDrawer('bottom',true)}>Message Me Cat Pictures!</Button>

                <Drawer anchor='bottom' className={classes.Drawer} open={this.state.bottom} onClose={this.toggleDrawer('bottom',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('bottom',false)}
                    onKeyDown={this.toggleDrawer('bottom',false)}
                    >
                
                        <a href="https://github.com/PierceMor" style={{ marginRight:'15%', float:'right' }} >
                            <img src={GitHub} className={classes.img} />
                        </a>

                        <a href="mailto:piercemorrill91@gmail.com" style={{ marginRight: '15%',float:  'right' }}>
                            <img src={gmail} className={classes.img} />
                        </a>

                        <a href="https://www.linkedin.com/in/pierce-morrill/" style={{ marginRight: '15%',float:  'right' }}>
                            <img src={LinkedIn} className={classes.img} />
                        </a>
                        
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