import React from 'react';
import { useFetch } from '../hooks/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const Fetch = () => {
  const { data: userData } = useFetch(baseUrl, 'users');
  const { data: postData } = useFetch(baseUrl, 'posts');

  return (
    <div>
      <h1>User</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 5)}</pre>}
      <h1>Post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 5)}</pre>}
    </div>
  );
};

export default Fetch;
