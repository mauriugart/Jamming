import React from "react";
import "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = React.useState("");

    const handleSearchChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Enter a song, artist, or album"
                    value={term}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
