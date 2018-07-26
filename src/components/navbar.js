import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom";

const styles = {
    root: {
        zIndex: 1,
        width: '100%',
        flexGrow: 1,
        position: 'sticky',
        top: 0,
        marginBottom: 3,
        color: 'inherit',
        textDecoration: 'inherit',
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        underLine: 'none',
        color: '#718DA5 !important',
    }
};//styles

function Navbar(props) {
    

    const { classes } = props;
    return (
        <Grid className={classes.root} spacing={12}>
                
            <Grid item xs={4}>
            </Grid>

            <Grid item xs={12}>
                <AppBar position="static">
                    <Toolbar>

                        
                        <Button  className={classes.menuButton} className={window.location.pathname === "/" ? "active nav-link" : "nav-link"}>
                            <NavLink to='/'>
                                    Pierce Morrill
                            </NavLink>
                        </Button>

                        <Typography variant="title" color="inherit" className={classes.flex}>
                        </Typography>

                        <NavLink to='/Projects'>
                            <Button className={classes.menuButton} className={window.location.pathname === "/Projects" ? "active nav-link" : "nav-link"}>
                                
                                Projects
                            </Button>
                        </NavLink>
                        
                    </Toolbar> 
                </AppBar>
            </Grid>
                
            <Grid item xs={4}>
            </Grid>

        </Grid>
    )//return
}//Navbar

Navbar.propTypes= {
    classes: PropTypes.object.isRequierd,
};

export default withStyles(styles)(Navbar);