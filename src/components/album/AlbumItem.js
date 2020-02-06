import React from 'React';
import PropTypes from 'prop-types';

const AlbumItem = ({ releaseId, albumName }) => (
  <>
    <img src={`http://coverartarchive.org/release/${releaseId}/front`} />
    <p>{albumName}</p>
  </>
)

AlbumItem.PropTypes = {
  releaseId: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired
}

export default AlbumItem;