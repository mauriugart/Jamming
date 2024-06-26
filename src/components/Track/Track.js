import React from 'react';
import styles from'./Track.module.css';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
    const renderAction = () => {
        if (isRemoval) {
            return <button className="track-action" onClick={() => onRemove(track)}>-</button>;
        }
        return <button className="track-action" onClick={() => onAdd(track)}>+</button>;
    };

    return (
        <div className={styles.track}>
            <img src={track.album.cover} alt={track.album.name} />
            <div className={styles.trackInfo}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;
