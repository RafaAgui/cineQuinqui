import { useState, useEffect } from 'react';

export default function useApi() {
  const [data, setData] = useState(null);

  const FILMS = './films.json';

  useEffect(() => {
    fetch(FILMS)
      .then(res => res.json())
      .then(json => {
        setData(json.films); // Accede al array dentro del objeto projects
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return { data };
}
