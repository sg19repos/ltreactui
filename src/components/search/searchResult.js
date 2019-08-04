import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Typography from "@material-ui/core/Typography";
import AccountBox from "@material-ui/icons/AccountBox";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: "inline"
    }
}));

const UserSearchResult = ({ userData, onClick }) => {
    const { userFullName, userRowId } = userData;
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem
                alignItems="flex-start"
                onClick={() => onClick(userRowId)}
            >
                <ListItemAvatar>
                    <AccountBox />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        userFullName
                            ? userFullName
                            : "You can try searching userid"
                    }
                />
            </ListItem>
        </List>
    );
};

export default UserSearchResult;
