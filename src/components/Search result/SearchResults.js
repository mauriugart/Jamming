import React from "react";
import styles from './SearchResults.module.css';

const SearchResults = ({ searchResults, onAdd, onSearch }) => {
    return (
        <div className={styles.search-results}>
            <h2>Search Results</h2>
            <ul>
                {searchResults.map(track => (
                    <li key={track.id}>
                        {track.name} - {track.artist}
                        <button onClick={() => onAdd(track)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;