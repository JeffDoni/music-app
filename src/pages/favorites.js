import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
// import MusicCard from '../components/MusicCard';
// import Carregando from './Carregando';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
// import styles from '../styles/Favorites.module.css';

const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const songs = await getFavoriteSongs();
      setFavorite(songs);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleClick = async (id) => {
    console.log('deu certo', id);
    setLoading(true);
    const remove = favorite.find((music) => Number(music.trackId) === Number(id));
    await removeSong(remove);
    const newmusic = await getFavoriteSongs();
    setFavorite(newmusic);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <p>Músicas Favoritas</p>
        </div>
        <div>
          {/* {loading ? (
            <Carregando />
          ) : (
            favorite.map((music) => (
              // <MusicCard
              //   key={music.trackId}
              //   musics={music}
              //   handleClick={() => handleClick(music.trackId)}
              // />
            ))
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

