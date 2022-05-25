import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reviews">Review</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        {
            user && <li><Link to="/deshboard">Deshboard</Link></li>

        }
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>

        <button className="btn btn-link">user:  {user?.displayName}</button>


        <li>{user ? <button className="btn btn-active btn-ghost" onClick={logout}>sign out</button> : <Link to="/login">Login</Link>}</li>


    </>
    return (
        <div className='navbar bg-base-100 sticky top-0 z-50'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <label tabindex="0" className='btn btn-ghost lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                        {menuItems}
                    </ul>
                </div>
                <a className='btn btn-ghost normal-case text-xl'>Electric Tools House</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal p-0'>

                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabindex="1" for=" deshboard-sidebar" className='btn btn-ghost lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
          
            </div>
        </div>
    );
};

export default Navbar;