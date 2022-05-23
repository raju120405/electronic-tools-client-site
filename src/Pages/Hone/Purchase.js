import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = ({ purchase }) => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-center text-xl font-bold'>User Name: {user?.displayName}</h2>

            <h2 className='text-center text-xl font-bold'>User Email: {user?.email}</h2>

        </div>
    );
};

export default Purchase;