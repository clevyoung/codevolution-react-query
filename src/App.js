import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';
import SuperHeroesPage from './components/SuperHeroesPage';
import RQSuperHeroesPage from './components/RQSuperHeroesPage';
import RQSuperHeroPage from './components/RQSuperHeroPage';
import HomePage from './components/HomePage';
import ParallelQueriesPage from './components/ParallelQueriesPage';
import DynamicParallelQueriesPage from './components/DynamicParallelQueriesPage';
import DependentQueriesPage from './components/DependentQueriesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='App'>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/rq-dependent'>
              <DependentQueriesPage email='clevyoung@gmail.com' />
            </Route>
            <Route path='/rq-dynamic-parallel'>
              <DynamicParallelQueriesPage heroId={[1, 3]} />
            </Route>
            <Route path='/rq-parallel'>
              <ParallelQueriesPage />
            </Route>
            <Route path='/rq-super-heroes/:heroId'>
              <RQSuperHeroPage />
            </Route>
            <Route path='/super-heroes'>
              <SuperHeroesPage />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
