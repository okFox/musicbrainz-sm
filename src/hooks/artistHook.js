import { useState, useEffect } from 'react';
import getArtists from '../components/services/getArtists';

export const useArtists = () => {
  const [artistName, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getArtists(artistName)
      .then(artistName => setArtist(artistName))
      .finally(() => setLoading(false));
  }, []);

  return { artistName, setArtist };
};

