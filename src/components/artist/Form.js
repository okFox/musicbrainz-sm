import React from 'react';
import PropTypes from 'prop-types';

const ArtistInput = ({ artistName, setArtist}) => (
  <section>
    <input type="text" value={artistName} onChange={({ target }) => setArtist(target.value)} />
  </section>
);

ArtistInput.propTypes = {
  artistName: PropTypes.string,
  setArtist: PropTypes.func.isRequired
};

export default ArtistInput;
