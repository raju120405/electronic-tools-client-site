import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);



    return (
        <div class="drawer drawer-mobile">
  <input id=" deshboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
      <h2 className='text-2xl font-bold text-primary'>Welcome To Your Dashboard</h2>
  <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for=" deshboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      
      <li><Link to={'/deshboard'}>Dashboard</Link></li>
      <li><Link to={'/deshboard/reviews'}>User Reviews</Link></li>
      { admin &&<li><Link to={'/deshboard/users'}>All Users</Link></li>}
     
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;