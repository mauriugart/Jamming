import React from 'react';

const Track = ({ track }) => {
return (
    <div>
        <h2>{track.name}</h2>
        <p>{track.artist}</p>
        <p>{track.album}</p>
    </div>
);
}

export default Track;