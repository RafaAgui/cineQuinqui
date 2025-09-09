import './ListFilms.css';
import CardFilm from './CardFilm';
import useApi from '../hooks/useApi';
import { useState, useEffect } from 'react';

export default function ListFilms() {
  const { data } = useApi();
  const [films, setFilms] = useState([]);
  const [originalFilms, setOriginalFilms] = useState([]);

  useEffect(() => {
    if (data) {
      setFilms(data);
      setOriginalFilms(data);
    }
  }, [data]);

  const handleSortChange = (e) => {
    const value = e.target.value;

    if (value === 'original') {
      setFilms(originalFilms);
    } else {
      const sorted = [...films].sort((a, b) => {
        if (value === 'year') return a.year - b.year;
        if (value === 'score') return b.score - a.score;
        if (value === 'director') return a.director.localeCompare(b.director); 
        return 0;
      });
      setFilms(sorted);
    }
  };

  return (
    <>
      <h1 className="listCard__title">Películas</h1>

      <div className="listCard__controls">
        <label htmlFor="sort">Ordenar por:</label>
        <select id="sort" onChange={handleSortChange}>
          <option value="original">Orden original</option>
          <option value="year">Año</option>
          <option value="score">Puntuación</option>
          <option value="director">Director</option>
        </select>
      </div>

      <section className="listCard">
        {films && films.length === 0 && <p>No cards available.</p>}
        {films && films.map(film => (
          <CardFilm
            key={film.id}
            id={film.id}
            name={film.name}
            imgurl={film.imgurl}
            year={film.year}
            score={film.score}
            director={film.director}
          />
        ))}
      </section>
    </>
  );
}
