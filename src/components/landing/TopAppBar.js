import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});

const TopAppBar = AppBarTextContent => {
    const classes = useStyles();

    // console.log(AppBarTextContent.AppBarTextContent);
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        {AppBarTextContent.AppBarTextContent}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

// export default TopAppBar;
export default TopAppBar;
