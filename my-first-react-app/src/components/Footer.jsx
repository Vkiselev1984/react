import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => { 
const { theme } = useContext(ThemeContext); 
const currentYear = new Date().getFullYear(); 

return ( 
<footer className={theme}> 
<p>© {currentYear} My company</p> 
</footer> 
);
};

export default Footer;