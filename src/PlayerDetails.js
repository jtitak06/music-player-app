import React from "react";

function PlayerDetails(props) {
    return (
        <div className="c-PlayerDetails">
            <div className="details-img">
            <img src={props.song.imageSrc} alt="album-cover" />
            </div>
            <h3 className="c-Title">{props.song.title}</h3>
            <h4 className="c-Artist">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetails;