import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../Search result/SearchResults';
import Spotify from '../Spotify/Spotify';

const App = () => {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
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
    <div>
      <h1>Jammming</h1>
      <SearchResults searchResults={searchResults} onAdd={addTrack} onSearch={search} />
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