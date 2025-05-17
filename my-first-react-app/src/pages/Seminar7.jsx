import React from 'react';
import { useDispatch } from 'react-redux';
import UserList from '../components/UserList';
import { fetchUsersRequest } from '../redux/actions';

const Seminar7 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchUsersRequest());
    };

    return (
        <div>
            <h1>Seminar 7</h1>
            <button onClick={handleClick}>Load Users</button>
            <UserList />
        </div>
    );
};

export default Seminar7;