import React from "react";
import styles from "./Playlist.module.css";

const Playlist = ({ name, tracks, onNameChange, onRemove, onSave }) => {
    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    };

    return (
        <div className={styles.playlist}>
            <div className={styles.input}>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="playlist-input"
                />
            </div>
            <div className={styles.trackList}>
                {tracks.map((track) => (
                    <div key={track.id} className={styles.playlistTrack}>
                        <p>
                            {track.name} - {track.artist} | {track.album}
                        </p>
                        <button className={styles.playlistRemove} onClick={() => onRemove(track)}>
                            -
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.button}>
                <button className={styles.playlistSave} onClick={onSave}>
                    Save to Spotify
                </button>
            </div>
        </div>
    );
};

export default Playlist;
