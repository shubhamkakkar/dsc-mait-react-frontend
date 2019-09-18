import React from "react";
import {AppBar, Grid, Toolbar, Button, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import cssClasses from "./NavBar.module.css"
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
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
                         <Typography className={cssClasses.navigationTiles}>
                             {res}
                         </Typography>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default function NavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={3}>
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
        </div>
    )
};
