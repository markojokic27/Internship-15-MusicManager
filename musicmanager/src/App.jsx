import React, { useState } from "react";
import AlbumCollection from "./commponents/AlbumCollection";
import "./index.css";
function App() {
  const [albums, setAlbums] = useState([]);
  const handleAddAlbum = (newAlbum) => {
    setAlbums([...albums, newAlbum]);
  };
  const handleRemoveAlbum = (albumId) => {
    setAlbums(albums.filter((album) => album.id !== albumId));
  };
  return (
    <div className="app">
      <h1>Music Manager</h1>
      <AlbumCollection
        albums={albums}
        onAddAlbum={handleAddAlbum}
        onRemoveAlbum={handleRemoveAlbum}
      />
    </div>
  );
}

export default App;
