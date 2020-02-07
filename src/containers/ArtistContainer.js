import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistInput from '../components/artist/Form';
import styles from './ArtistContainer.css';
import useArtists from '../hooks/artistHook';

const ArtistContainer = () => {
  const { artistName, handleChange, handleSubmit, artistArray } = useArtists();

  // const nameNoSpace = artistName.replace(/\s/g, '-');

  return (
    <section className={styles.Container}>
      <ArtistInput artistName={artistName} onChange={handleChange} onSubmit={handleSubmit}/>
      <ArtistList artistArray={artistArray} artistName={artistName} />

    </section>
  );
};

export default ArtistContainer;
