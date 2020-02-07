import { useState, useEffect } from 'react';
import { getArtists } from '../components/services/getArtists';

const useArtists = () => {
  const [artistName, setArtist] = useState('');
  const [artistArray, setArtistArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const nameNoSpace = artistName.replace(/\s/g, '-');

  useEffect(() => {
    setLoading(true);
    getArtists(nameNoSpace)
      .then(artistArray => {
        setArtistArray(artistArray);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = ({ target }) => {
    setArtist(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    getArtists(nameNoSpace)
      .then(artistArray => {
        setArtistArray(artistArray);
      })
      .finally(() => setLoading(false));
  };

  return { artistArray, artistName, setArtist, handleChange, handleSubmit, loading };
};

export default useArtists;
