import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

// What we have to do is include the heroId as part of the query key by specifying an array
export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], fetchSuperHero); //react query automatically passes them into the fetcher function we can replace the arrow function (() => fetchSuperHero(heroId)) with fetchSuperHero
};
