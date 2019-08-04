import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackElement from "./trackElement";

const TrackList = props => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                "http://localhost/lt_180519/lt_api/moods/readCollection.php",
                {
                    params: {
                        moodId: props.location.state.userMoodDatum
                    }
                }
            );
            setTracks(result.data);
        }
        fetchData();
    }, []);

    return tracks.length !== 0 ? (
        <ul>
            {tracks.collections.map(track => (
                <TrackElement trackData={track.moodTrackName} />
            ))}
        </ul>
    ) : (
        "There?"
    );
};

export default TrackList;
