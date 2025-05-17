import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
    const { users = [], loading = false, error = null } = useSelector(state => state.users) || {};

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;