import './Card.css'
import { Link } from 'react-router-dom';

export default function CardFilm({ id, name, imgurl })  {

  return (
    < >
      <Link to={`/${id}`} className="card">
        <h2 className="card__title">{name}</h2>
        <img className="card__img" src={imgurl} alt={`imagen de ${name}`} />
      </Link>
    </>
  );
}