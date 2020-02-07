const getAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(({ releases }) => releases.map(release => ({
      albumTitle: release.title,
      albumId: release.id
    })));
};
export default getAlbums;
