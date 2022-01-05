import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

// 참고 : https://react-query.tanstack.com/guides/parallel-queries

const fetchSuperHeroes = () => {
  return axios.get('https://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('https://localhost:4000/friends');
};

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes);
  const { data: friends } = useQuery('friends', fetchSuperHeroes);

  return <div></div>;
};

export default ParallelQueriesPage;
