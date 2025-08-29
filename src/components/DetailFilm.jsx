import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';

const CardDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useApi();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data && !isLoading) {
      const found = data.find((el) => el.id.toString() === id);
      setItem(found);
    }
  }, [data, isLoading, id]);

  if (isLoading || !data || !item) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;
  if (!item) return <p>No se encontró el elemento</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.imgurl} alt={`Imagen de ${item.name}`} />
      <p>{item.description}</p>
      
      <p>Fecha de estreno: {item.year}</p>
      <p>Director: {item.director}</p>
      <p>Actor Principal: {item.star}</p>
    </div>
  );
};
export default CardDetail;