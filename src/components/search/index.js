import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import UserSearchResult from "./searchResult";
// import UserMoodsList from "./userMoodsList";

import FullWidthTabs from "./searchTabs";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
}));

export default function UserSearchField() {
    const classes = useStyles();
    const [userResults, setUserResults] = useState([]);

    const [listType, setListType] = useState("users");
    const [userMoodData, setUserMoodData] = useState({});
    const [currentUser, setCurrentUser] = useState("");

    const handleChange = value => event => {
        let userId = event.target.value;

        return axios
            .get(
                "http://localhost/lt_180519/lt_api/users/search.php?userId=" +
                    userId,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                }
            )
            .then(handleErrors)
            .then(res => {
                setUserResults(res);
            });
    };

    const handeUserNameClick = userData => {
        axios
            .get("http://localhost/lt_180519/lt_api/moods/getUserMoods.php", {
                params: {
                    moodUserId: userData.userRowId
                }
            })
            .then(res => {
                setUserMoodData(res.data.userMoods);
                setCurrentUser(userData.userFullName);
                setListType("userData");
            });
    };

    // const handleUserMoodClick = userMoodDatum => {
    //     console.log("userMoodDatum", userMoodDatum);
    //     axios
    //         .get("http://localhost/lt_180519/lt_api/moods/readCollection.php", {
    //             params: {
    //                 moodId: userMoodDatum.lt_mood_user_id
    //             }
    //         })
    //         .then(res => {
    //             console.log("res", res.data.collections);
    //             // setUserMoodData(res.data.userMoods);
    //             // setCurrentUser(userData.userFullName);
    //             // setListType("userData");
    //         });
    // };

    const handleErrors = response => {
        if (response.statusText !== "OK") {
            return response.data.users;
        } else {
            return response.data.users;
        }
    };

    const setFocus = () => {
        setListType("users");
        setCurrentUser("");
    };
    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Search username"
                    className={classes.textField}
                    onChange={handleChange()}
                    margin="normal"
                    variant="outlined"
                    onFocus={() => setFocus()}
                />
            </form>
            <h4>{currentUser}</h4>
            {userResults.length > 0 ? (
                listType === "users" ? (
                    userResults.map(userData => (
                        <ul>
                            <UserSearchResult
                                userData={userData}
                                onClick={() => handeUserNameClick(userData)}
                            />
                        </ul>
                    ))
                ) : (
                    <FullWidthTabs
                        userMoodData={userMoodData}
                        currentUser={currentUser}
                    />
                )
            ) : (
                // userMoodData.map(userMoodDatum => (
                //       <Fragment>
                //           <ul>
                //               <UserMoodsList
                //                   userMoodDatum={userMoodDatum}
                //                   // onClick={() =>
                //                   //     handleUserMoodClick(userMoodDatum)
                //                   // }
                //               />
                //           </ul>
                //       </Fragment>
                //   ))
                "Try searching with userId"
            )}
        </React.Fragment>
    );
}
