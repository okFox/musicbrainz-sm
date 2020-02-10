export const getLyrics = (artistName, recordingTitle) => {
  //more regex needed to remove special characters from titles
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${recordingTitle}`)
    .then(res => res.json())
    .then(({ lyrics }) => lyrics);
};
