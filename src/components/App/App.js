import React, {useState} from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, name: "Song One", artist: "Artist One", album: "Album One" },
    { id: 2, name: "Song Two", artist: "Artist Two", album: "Album Two" },
    { id: 3, name: "Song Three", artist: "Artist Three", album: "Album Three" },
  ]);

  return (
    <div>
      <h1>Jammming</h1>
      <Playlist 
        name={playlistName} 
        tracks={playlistTracks} 
        onNameChange={setPlaylistName} 
      />
    </div>
  );
}

export default App;