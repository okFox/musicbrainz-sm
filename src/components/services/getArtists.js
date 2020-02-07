export const getArtists = (artistName) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(artistArray => artistArray.map(artist => ({
      artistName: artist.name,
      artistId: artist.id,
    })));
};
