import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    // cacheTime: 5000, after five seconds the query is garbage collected
    // staleTime: 30000, the default value is 0
    // refetchOnMount: false, Another possible value you can specify is the string 'always' so irrespective of whether the query data is stale or not the query will always refresh the data when the component mounts
    // refetchOnWindowFocus: true, If we change batman to batman dark knight and go back to the browser the list does not reflect the change in name there is no way for the component to know if the remote data has changed only when we refresh we see the updated name You can see the list automatically updates our ui is now in sync with the remote data this is possible because of the refetch on window focus configuration by default it is set to true
    // refetchInterval: 2000,
    // enabled: false,
    onSuccess,
    onError,

    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);

    //   // You could potentially use filter to select only few elements from the data returned
    //   // select option to transform or select a part of the data returned by the query function
    //   return superHeroNames;
    // }, //select is a function which automatically receives the api data as an argument
  });

  /**
   * For example let's say our list of superheroes does not change often and it is okay if the user sees stale data for
   * a while is such cases we can use the cached query results without having to refetch in the background
   * to achieve that behavior we configure another property staletime
   */
};
