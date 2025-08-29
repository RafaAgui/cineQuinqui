import './ListFilms.css';
import CardFilm from './CardFilm';
import useApi from '../hooks/useApi';

export default function ListFilms() {

  const { data } = useApi();


  return (
    <>
    <h1 className="listCard__title">Películas</h1>
    <section className="listCard">
      

        { data && data.length === 0 && (
          <p>No cards available.</p>
        )}
        {data && data.map(film => (
          <CardFilm
            key={film.id}
            id={film.id}
            name={film.name}
            imgurl={film.imgurl}
          />
        ))}
    </section>
    </>
  );
}