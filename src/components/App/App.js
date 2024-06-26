import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../Searchbar/SearchBar'
import Spotify from '../Spotify/Spotify';
import TrackList from '../Tracklist/Tracklist';
import './App.css';

const App = () => {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then(tracks => setSearchResults(tracks));
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <TrackList
        tracks={searchResults}
        onAdd={addTrack}
        isRemoval={false}
      />
      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
};

export default App;