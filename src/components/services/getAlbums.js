const getAlbum = artistId => {
  fetch(`http://coverartarchive.org/release/${artistId}/front`)
    .then(res => res.json());
};

export default getAlbum;
