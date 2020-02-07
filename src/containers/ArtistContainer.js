import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistInput from '../components/artist/Form';
import styles from './ArtistContainer.css';
import useArtists from '../hooks/artistHook';

const ArtistContainer = () => {
  const { artistName, handleChange, handleSubmit, artistArray } = useArtists();

  


  return (
    <section className={styles.Container}>
      <ArtistInput artistName={artistName} onChange={handleChange} onSubmit={handleSubmit}/>
      <ArtistList artistArray={artistArray} />

    </section>
  );
};

export default ArtistContainer;


