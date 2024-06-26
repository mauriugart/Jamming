import React, {useState} from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../Search result/SearchResults';

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, name: "Song One", artist: "Artist One", album: "Album One" },
    { id: 2, name: "Song Two", artist: "Artist Two", album: "Album Two" },
    { id: 3, name: "Song Three", artist: "Artist Three", album: "Album Three" },
  ]);

  const [searchResults, setSearchResults] = useState([
    { id: 4, name: "Song Four", artist: "Artist Four", album: "Album Four" },
    { id: 5, name: "Song Five", artist: "Artist Five", album: "Album Five" },
    { id: 6, name: "Song Six", artist: "Artist Six", album: "Album Six" },
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  return (
    <div>
      <h1>Jammming</h1>
      
      <SearchResults
      searchResults={searchResults}
      onAdd={addTrack}
      />

      <Playlist 
        name={playlistName} 
        tracks={playlistTracks} 
        onNameChange={setPlaylistName}
        onRemove={removeTrack}
      />
    </div>
  );
}

export default App;