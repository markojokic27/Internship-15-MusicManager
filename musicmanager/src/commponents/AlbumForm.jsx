import React, { useState } from "react";

function AlbumForm({ onAddAlbum, albumCount }) {
  const [naziv, setNaziv] = useState("");
  const [autor, setAutor] = useState("");
  const [zanr, setZanr] = useState("");
  const [godinaIzdavanja, setGodinaIzdavanja] = useState("");
  const [datumDodavanja, setDatumDodavanja] = useState(new Date());
  const handleAddAlbum = (e) => {
    e.preventDefault();

    if (!naziv || !autor || !zanr || !godinaIzdavanja) {
      alert("Molimo unesite sve podatke!");
      return;
    }

    if (albumCount >= 10) {
      alert("Unjeli ste već 10 albuma!");
      return;
    }

    const newAlbum = {
      id: albumCount + 1,
      naziv,
      autor,
      zanr,
      godinaIzdavanja,
      datumDodavanja,
    };

    onAddAlbum(newAlbum);

    // Resetiraj input polja
    setNaziv("");
    setAutor("");
    setZanr("");
    setGodinaIzdavanja("");
    setDatumDodavanja(new Date());
  };

  return (
    <form className="album-form" onSubmit={handleAddAlbum}>
      <input
        type="text"
        placeholder="Naziv"
        value={naziv}
        onChange={(e) => setNaziv(e.target.value)}
        className="album-form__text"
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        className="album-form__text"
      />
      <select value={zanr} onChange={(e) => setZanr(e.target.value)}>
        <option value="">Odaberi žanr</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Funk">Funk</option>
        <option value="Rap">Rap</option>
      </select>
      <input
        type="number"
        placeholder="Godina izdavanja"
        value={godinaIzdavanja}
        onChange={(e) => setGodinaIzdavanja(e.target.value)}
      />
      <button type="submit">Dodaj album</button>
    </form>
  );
}


export default AlbumForm;
