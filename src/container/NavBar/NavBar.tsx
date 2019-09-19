import React from "react";
import {AppBar, Grid, Toolbar, Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import cssClasses from "./NavBar.module.css"

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fff",
        position: "sticky",
        top: "0"
    }
}));

function NavigationOptions() {
    return (
        <Grid container spacing={3}>
            {
                [
                    "Link 1",
                    "Link 1",
                    "Link 1",
                    "Link 1",
                ].map((res, key) => (
                    <Grid
                        {...{key}}
                        item
                        xs={3}
                        style={{textAlign: "center"}}
                    >
                        <p className={cssClasses.navigationTiles}>
                            {res}
                        </p>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid
                        item
                        xs={3}
                        style={{textAlign: "center"}}
                    >
                        logo
                    </Grid>
                    <Grid item xs={8}>
                        <NavigationOptions/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};


// here will be a bottom bar which on scroll would move along it and would then get fiexd at top, with change in background color!!
// for phone,
//         an animated toolbar would be present,
//     a right corner sticky aspect which on clinck would bounce open as a full screen model
