<<<<<<< HEAD
const getAlbum = artistId => {
  fetch(`http://coverartarchive.org/release/${artistId}/front`)
    .then(res => res.json());
};

export default getAlbum;
=======
const getAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(({ releases }) => releases.map(release => ({
      albumTitle: release.title,
      albumId: release.id
    })));
};
export default getAlbums;
>>>>>>> 7a75cc0f4aaebc4b0129843c013b31bbf7d09d79
