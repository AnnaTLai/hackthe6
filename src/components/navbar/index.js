import { AppBar, Button, Toolbar, makeStyles } from '@material-ui/core';
import React from "react";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

    menuText: {
        fontSize : 16,
        marginRight: 18
    }

});

export default function MainNav() {
    const classes = useStyles();

    return (
            <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                <Button component={Link} to="/"
                        className={classes.menuText}
                        variant="contained"
                        color="primary"
                        aria-label="button to go to home page">
                    Home
                </Button>
                <Button component={Link} to="/workshops"
                        className={classes.menuText}
                        variant="contained"
                        color="primary"
                        aria-label="button to open workshop page">
                Workshops
                </Button>
                </Toolbar>
            </AppBar>
    )
}