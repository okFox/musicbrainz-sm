import React from 'react';
import { useEffect, useState } from 'react';
import { getLyrics } from '../services/getLyrics';
import PropTypes from 'prop-types';
import './Lyrics.css';

function Lyrics({ match }) {
  const [lyrics, setLyrics] = useState('');
  const [lyricSong, setLyricSong] = useState('');
  const [lyricPerformer, setLyricPerformer] = useState('');

  useEffect(() => {
    getLyrics(match.params.artistName, match.params.recordingTitle)
      .then(receivedLyrics => setLyrics(receivedLyrics))
      .then(setLyricPerformer(match.params.artistName))
      .then(setLyricSong(match.params.recordingTitle));
  });

  return (
    <section>
      <h1>{lyricSong}</h1>
      <h3>by {lyricPerformer}</h3>
      <pre>{lyrics}</pre> 
    </section>
  );
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recordingTitle: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired
    })
  }).isRequired
};


export default Lyrics;
