import { useParams } from 'react-router';
import React from 'react';

import { useSuperHeroData } from '../hooks/useSuperHeroData';

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { idLoading, data, isError, error } = useSuperHeroData(heroId);

  if (idLoading) {
    return <h2>Loading... </h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHeroPage;
