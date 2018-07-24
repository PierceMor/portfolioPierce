import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const Links ={
    src:[
    'https://www.linkedin.com/in/pierce-morrill/',
    'https://github.com/PierceMor'
]
}

const styles ={
    root : {
        textAlign: 'center',
        position: 'sticky',
        width: '100%',
        color: 'primary',
        bottom: 0,
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

                <Button onClick={this.toggleDrawer('bottom',true)}>Message Me Cat Pictures!</Button>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left',false)}
                    onKeyDown={this.toggleDrawer('left',false)}
                    >
                       {sideList}
                    </div>
                </Drawer>

                <Drawer anchor='top' open={this.state.top} onClose={this.toggleDrawer('top',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('top',false)}
                    onKeyDown={this.toggleDrawer('top',false)}
                    >
                       {sideList}
                    </div>
                </Drawer>

                <Drawer anchor='top' open={this.state.top} onClose={this.toggleDrawer('top',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('top',false)}
                    onKeyDown={this.toggleDrawer('top',false)}
                    >
                       {sideList}
                    </div>
                </Drawer>

                <Drawer anchor='bottom' open={this.state.bottom} onClose={this.toggleDrawer('bottom',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('bottom',false)}
                    onKeyDown={this.toggleDrawer('bottom',false)}
                    >
                       {sideList}
                    </div>
                </Drawer>

                <Drawer anchor='right' open={this.state.right} onClose={this.toggleDrawer('right',false)}>
                    <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('right',false)}
                    onKeyDown={this.toggleDrawer('right',false)}
                    >
                       {sideList}
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