import React from 'react';
import Albums from '../containers/Albums';
import ArtistContainer from '../containers/ArtistContainer';
import Header from './common/Header';

export default function App() {
  return (
    <>
      <Header />
      <ArtistContainer />
      <Albums />;
    </>
  );
}

