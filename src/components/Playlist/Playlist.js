import React from 'react';
import TrackList from '../Tracklist/Tracklist';

const Playlist = ({ name, tracks, onNameChange, onRemove, onSave }) => {
    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    };

    return (
        <div>
            <input
                value={name}
                onChange={handleNameChange}
                placeholder="Enter playlist name"
            />
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true} />
            <button onClick={onSave}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;
