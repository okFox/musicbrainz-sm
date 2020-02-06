import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import albumInfo from './albumInfo.json';
import styles from './AlbumList.css';

const AlbumList = () => {
  const albumElements = albumInfo.releases.map((album, i) => (
    <li key={i}>
      <AlbumItem releaseId={album.id} albumName={album.title} />
    </li>
  ));

  return (
    <ul className={styles.Albums}>
      {albumElements}
    </ul>
  )
}

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired
}

export default AlbumList;