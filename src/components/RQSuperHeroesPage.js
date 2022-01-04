import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const RQSuperHeroesPage = () => {
  //this function will be called when the query successfully fetches data

  const onSuccess = (data) => {
    console.log(data);

    console.log('Perform side effect after data fetching', data);
  };

  // this function gets called when the query encounters an error while trying to fetch the data.
  // What is also worth noting is react query automatically injects the data that has been fetched or the error that was encountered into these callbacks
  const onError = (error) => {
    console.log('Perform side effect after encountering error', error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  /**
   * For example let's say our list of superheroes does not change often and it is okay if the user sees stale data for
   * a while is such cases we can use the cached query results without having to refetch in the background
   * to achieve that behavior we configure another property staletime
   */

  console.log({ isLoading, isFetching });

  /**
   * The first time useQuery is fired for superheroes key isLoading is set to true and a network request is sent to fetch the data
   * when the request is completed it is cached using the query key and the fetchSuperheroes function as the unique identifiers
   * When we navigate to the homepage and revisit the rq-super-heroes page
   * React Query will check if the data for this query exists in cache since it does the cached data is immediately returned without isLoading set to true
   * That is the reason we don't see the loading text for subsequent requests
   * However React Query knows that the server data might have updated and the cache might not contain the latest data
   * so a background refetch is triggered for the same query and if the fetch is successful the new data is updated in the ui
   * I want you to first observe the list of heroes on the left we will see the cached list from before and then the the list updates when the
   * background refetching has completed
   * In this way React Query out of the box leads to better user experience as there is a list being displayed already and the the list
   * updates in the background. A user does not have to see the loading indicator every single time
   */

  if (isLoading) {
    return <h2>Loading... </h2>;
  }

  // After a delay we see the error message. we see the loading text for a long time because React Query automatically retries if the api request failed
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {/* useQuery returns a function called refetch to manually trigger the query. All we have to do is pass it in as the onClick handler  */}
      <button onClick={refetch}>Button</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

export default RQSuperHeroesPage;
