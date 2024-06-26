import React, {useState} from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");

    const handleSearchChange = (event) => {
        setTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
        setTerm("");
    };

    return (
        <div className={styles.searchBar}>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Enter a song, artist, or album"
                    value={term}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
