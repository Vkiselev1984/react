import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
const { user } = useContext(UserContext);

return (
<h1>Hello, {user?.name || 'Guest'}!</h1>
);
};

export default Header;