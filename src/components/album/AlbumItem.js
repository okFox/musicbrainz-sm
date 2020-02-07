import React from 'react';
import PropTypes from 'prop-types';

const AlbumItem = ({ albumId, albumTitle }) => (
  <>
    <img src={`http://coverartarchive.org/release/${albumId}/front`} />
    <p>{albumTitle}</p>
  </>
);

AlbumItem.propTypes = {
  albumId: PropTypes.string.isRequired,
  albumTitle: PropTypes.string.isRequired
};

export default AlbumItem;
