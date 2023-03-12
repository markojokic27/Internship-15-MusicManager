import React, { useState } from "react";
import Album from "./Album";
import AlbumForm from "./AlbumForm";

function AlbumCollection({ albums, onAddAlbum, onRemoveAlbum }) {
  const [filterNaziv, setFilterNaziv] = useState("");
  const [filterZanr, setFilterZanr] = useState("");
  const filteredAlbums = albums.filter(
    (album) =>
      album.naziv.toLowerCase().includes(filterNaziv.toLowerCase()) &&
      album.zanr.includes(filterZanr)
  );
  const sortedAlbums = filteredAlbums.sort((a, b) => {
    if (a.godinaIzdavanja !== b.godinaIzdavanja) {
      return a.godinaIzdavanja - b.godinaIzdavanja;
    }
    if (a.autor !== b.autor) {
      return a.autor.localeCompare(b.autor);
    }
    return a.naziv.localeCompare(b.naziv);
  });

  return (
    <div>
      <AlbumForm onAddAlbum={onAddAlbum} albumCount={albums.length} />
      <div className="album-filters">
        <h2>Filter :</h2>
        <input
          type="text"
          placeholder="Filtriraj po nazivu"
          value={filterNaziv}
          onChange={(e) => setFilterNaziv(e.target.value)}
        />
        <select
          value={filterZanr}
          onChange={(e) => setFilterZanr(e.target.value)}
        >
          <option value="">Odaberi žanr</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Funk">Funk</option>
          <option value="Rap">Rap</option>
        </select>
      </div>
      <div className="album-list">
        <h2>Lista albuma:</h2>
        {sortedAlbums.map((album) => (
          <Album key={album.id} album={album} onRemoveAlbum={onRemoveAlbum} />
        ))}
      </div>
    </div>
  );
}
export default AlbumCollection;
