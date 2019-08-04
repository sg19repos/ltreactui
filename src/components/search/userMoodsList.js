import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    }
});

const UserMoodsList = ({ userMoodDatum, onClick }) => {
    const { lt_mood_name, lt_mood_user_id } = userMoodDatum;
    // console.log("userMoodDatum--------", userMoodDatum);
    const classes = useStyles();

    return (
        // <Card className={classes.card} onClick={() => onClick(lt_mood_user_id)}>
        <Card className={classes.card}>
            <Link
                to={{
                    pathname: "/trackList",
                    state: { userMoodDatum: lt_mood_user_id }
                }}
            >
                Tracks list
            </Link>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/images/musicIcon.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {lt_mood_name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserMoodsList;
