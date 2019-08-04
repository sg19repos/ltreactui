import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
/**Import Icons */
import SearchIcon from "@material-ui/icons/Search";
import Home from "@material-ui/icons/Home";
import List from "@material-ui/icons/List";
import AccountBox from "@material-ui/icons/AccountBox";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from "./routes";
import TopAppBar from "./TopAppBar";


// import styles from './styles'

const getRouteFromPath = data => {
    switch (data) {
        case "/":
            return "Home";
        case "/list":
            return "Trends";
        case "/search":
            return "Search";
        case "/account":
            return "Account";
        default:
            return "Page not found!";
    }
};

const useStyles = makeStyles(theme => ({
    appBar: {
        top: "auto",
        bottom: 0,
        backgroundColor: "black"
    },
    toolbar: {
        alignItems: "center",
        justifyContent: "space-between"
    }
}));

const LandComponent = () => {

    const classes = useStyles();

    const [currentRoute, setCurrentRoute] = useState(getRouteFromPath(window.location.pathname));

    const getCurrentRoute = routeName => {
        setCurrentRoute(routeName)
    };

    // const { classes } = this.props;
    const linkStyles = {
        color: "#fff"
    };


    return (<React.Fragment>
        <CssBaseline />
        <Router>
            <TopAppBar AppBarTextContent={currentRoute} />
            {routes}
            <AppBar
                position="fixed"
                color="primary"
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        onClick={() => getCurrentRoute("Home")}
                        aria-label="Open drawer"
                    >
                        <Link to="/" style={linkStyles}>
                            <Home />
                        </Link>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => getCurrentRoute("Trends")}
                    >
                        <Link to="/list" style={linkStyles}>
                            <List />
                        </Link>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() => getCurrentRoute("Search")}
                    >
                        <Link to="/search" style={linkStyles}>
                            <SearchIcon />
                        </Link>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={() =>
                            getCurrentRoute("My Account")
                        }
                    >
                        <Link to="/account" style={linkStyles}>
                            <AccountBox />
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Router>
    </React.Fragment>);
}

export default LandComponent;