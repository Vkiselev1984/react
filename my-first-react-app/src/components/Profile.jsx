import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
const { user } = useContext(UserContext);
const { theme } = useContext(ThemeContext);

return (
<div className={`profile ${theme}`}>
<h2>User profile:</h2>
<p>Name: {user?.name || 'Not specified'}</p>
<p>Theme: {theme}</p>
</div>
);
};

export default Profile;