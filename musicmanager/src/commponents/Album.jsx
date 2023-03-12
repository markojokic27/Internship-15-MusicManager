function Album({ album, onRemoveAlbum }) {
  const { id, naziv, autor, zanr, godinaIzdavanja, datumDodavanja } = album;
  const handleRemoveAlbum = () => {
    onRemoveAlbum(id);
  };

  return (
    <div
      className={`album ${
        new Date(datumDodavanja).toDateString() === new Date().toDateString()
          ? "today"
          : ""
      }`}
    >
      <div className="album-info">
        <p>Naslov:&nbsp;{naziv}</p>
        <p>Autor:&nbsp;{autor}</p>
        <p>Žanr:&nbsp;{zanr}</p>
        <p>Godina:&nbsp;{godinaIzdavanja}</p>
        <p>Dodano:&nbsp;{new Date(datumDodavanja).toLocaleDateString()}</p>
        <button className="remove-album" onClick={handleRemoveAlbum}>
        X
        </button>
      </div>
      
    </div>
  );
}
export default Album;
