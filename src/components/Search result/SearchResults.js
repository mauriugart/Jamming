import React, { useState } from "react";
import TrackList from "../Tracklist/Tracklist";

const SearchResults = ({ searchResults, onAdd, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <h2>Search Results</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={handleTermChange}
                placeholder="Enter a song, album, or artist"
            />
            <button onClick={handleSearch}>Search</button>
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
        </div>
    );
};

export default SearchResults;
