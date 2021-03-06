import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';
const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://dry-bayou-53377.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      {
          users.map((user,index)=><UsersRow
         key={user._id}
         index={index}
         user={user}
         refetch={refetch}
          ></UsersRow>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;