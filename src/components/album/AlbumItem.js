import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AlbumItem = ({ albumId, albumTitle }) => {
  <>
    <Link to={`/recording/${albumId}`}>
      <img src={`http://coverartarchive.org/release/${albumId}/front`} />
      <p>{albumTitle}</p>
    </Link>
  </>;
};

AlbumItem.propTypes = {
  albumId: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired
};

export default AlbumItem;
