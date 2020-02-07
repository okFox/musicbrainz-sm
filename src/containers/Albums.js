import React, { useEffect, useState } from 'react';
import AlbumList from '../components/album/AlbumList';
import PropTypes from 'prop-types';
import getAlbums from '../components/services/getAlbums';

const Albums = ({ match }) => {
  const [albumArray, setAlbumArray] = useState([]);


  useEffect(() => {
    console.log('HELLLLLOOOOOOO')
    getAlbums(match.params.artistId)
      .then(receivedAlbumArray => {
        setAlbumArray(receivedAlbumArray);
      });
  }, []);

  return (
    <>
      <AlbumList albumArray={albumArray} />
    </>
  );
};

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired
    })
  }).isRequired
};


export default Albums;
