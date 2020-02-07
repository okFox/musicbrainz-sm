import React from 'react';
import ArtistList from '../components/artist/ArtistList';
import ArtistForm from '../components/artist/Form';
import styles from './ArtistContainer.css';

const ArtistContainer = () => {




  return (
    <section className={styles.Container}>
      <ArtistForm />
      <ArtistList />

    </section>
  );
};

export default ArtistContainer;


