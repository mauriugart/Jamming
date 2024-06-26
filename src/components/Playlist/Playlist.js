import React from "react";
import "./Playlist.module.css";

const Playlist = ({ name, tracks, onNameChange, onRemove, onSave }) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    };

    return (
        <div className="playlist">
            <input type="text" value={name} onChange={handleNameChange} />
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>
                        {track.name} - {track.artist}
                        <button className="remove-button" onClick={() => onRemove(track)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="save-button" onClick={onSave}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;