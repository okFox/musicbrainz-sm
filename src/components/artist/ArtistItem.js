import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArtistItem.css';

const ArtistItem = ({ artistName, artistId }) => (
  <li className={styles.artistItem}>
    <h1>{artistName}</h1>
    <p>{artistId}</p>Name
  </li>
);

ArtistItem.propTypes = {
  artistName: PropTypes.string,
  artistId: PropTypes.string
};

export default ArtistItem;
