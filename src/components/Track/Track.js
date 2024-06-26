import React from "react";
import "./Track.module.css";

const Track = ({ track, onAdd, isRemoval }) => {
    const handleAddTrack = () => {
        onAdd(track);
    };

    return (
        <div className="track">
            <div className="track-info">
                <h3>{track.name}</h3>
                <p>
                    {track.artist} | {track.album}
                </p>
            </div>
            <button className="track-action" onClick={handleAddTrack}>
                {isRemoval ? "Remove" : "Add"}
            </button>
        </div>
    );
};

export default Track;
