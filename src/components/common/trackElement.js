import React, { useState } from "react";
import axios from "axios";

const TrackElement = ({ trackData }) => {
    const [songTrackId, setSongTrackId] = useState("");
    // const [songSrcURL, setSongSrcURL] = useState("");
    // return <h5>{trackData}</h5>;
    // let webApiUrl = "https://api.spotify.com/v1/search?q=Beatit&type=track";
    let webApiUrl =
        "https://api.spotify.com/v1/search?q=" + trackData + "&type=track";
    let tokenStr =
        "BQArfSodjy-PYwdtTGAoZuVrBJGCCvr9MSrPqdsO24GRROhu7aXBnkdoYWboQ0v7lbIn-JL2BR6ggCfZpbGm9gX2YTnaBvrS1eKS_pQQmt3bBL1P3QDuZ2jiUDxcfODGROcQsIEBwkmNFbkvlL2YE9tePSCC-mjx9A";
    // const url = axios.get(webApiUrl, { headers: { Authorization: `Bearer ${tokenStr}` } });

    // const url = await axios.get(webApiUrl, {
    //     headers: { Authorization: `Bearer ${tokenStr}` }
    // });
    // console.log("trackData", trackData);

    async function fetchSong() {
        const result = await axios.get(webApiUrl, {
            headers: { Authorization: `Bearer ${tokenStr}` }
        });
        // console.log(
        //     "result.data.tracks",
        //     "-----------" + trackData,
        //     result.data.tracks.items
        // );
        const trackId =
            result.data.tracks.items.length > 0
                ? result.data.tracks.items[0].id
                : null;
        setSongTrackId(trackId);
        // const setSongSrcURL =
        //     "https://open.spotify.com/embed/track/" + { songTrackId };
        // console.log("result", result.data.tracks.items[0].id);
    }
    fetchSong();

    console.log("URL is", songTrackId);

    // return "stuff";
    return (
        <div>
            <h5>{songTrackId}</h5>
            <iframe
                src={`https://open.spotify.com/embed/track/${songTrackId}`}
                width="300"
                height="80"
                // frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            />
        </div>
    );
};

export default TrackElement;
