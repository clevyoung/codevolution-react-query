import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) => {
  return axios.get(`https://localhost:4000/user/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`https://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  // we want the query to be fired only after the channel id has been retrieved
  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div></div>;
};

export default DependentQueriesPage;
