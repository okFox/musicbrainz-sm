import React from 'react';
import ArtistItem from './ArtistItem.js';
import styles from './ArtistItem.css';

const artistNames = [
  { artistId: '1', artistName: 'Prince' },
  { artistId: '2', artistName: 'Bon Jovi' }
];

const ArtistList = () => {
  // const { artistNames } = useArtistName();

  const artistItemElements = artistNames.map(({ artistName, artistId }) => (
    <ArtistItem key={artistId} artistName={artistName} />
  ));

  return (
    <section className={styles.artistList}>
      <ul>
        {artistItemElements}
      </ul>
    </section>
  );


};

export default ArtistList;
