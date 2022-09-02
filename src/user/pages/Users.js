import React from 'react';
import UsersList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: 'david',
    image: 'https://cdn.lindberg.com/media/dgsacnze/tt_m5504_pgt_b.jpg',
    places: 3
    }
];

  return <UsersList items={USERS} />;
};

export default Users;
