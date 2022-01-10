import React from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';

const fetchSuperHero = (heroId) => {
  return axios.get(`https://localhost:4000/superheroes/${heroId}`);
};

// this is about dynamic parallel queries using the useQueries hook
const DynamicParallelQueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  return <div></div>;
};

export default DynamicParallelQueriesPage;
