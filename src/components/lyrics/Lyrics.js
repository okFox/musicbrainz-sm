import React from 'react';
import { useEffect, useState } from 'react';
import { getLyrics } from '../services/getLyrics';
import PropTypes from 'prop-types';
import './Lyrics.css';

function Lyrics({ match }) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(match.params.artistName, match.params.recordingTitle)
      .then(receivedLyrics => setLyrics(receivedLyrics));
  });

  return (
    <section>
      <h1>{match.params.recordingTitle}</h1>
      <h3>by {match.params.artistName}</h3>
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
