import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import { UserContext, UserProvider } from '../contexts/UserContext';
import '../css/sliser.css';
import '../css/style.css';
import withLoadingIndicator from '../hocs/withLoadingIndicator';

const Seminar5 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    loadData();
  }, []);

  return (
    <UserProvider>
      <ThemeProvider>
        <MainWithLoading isLoading={isLoading} />
      </ThemeProvider>
    </UserProvider>
  );
};

const Main = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleUserChange = (e) => {
    setUser({ name: e.target.value });
  };

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <Header />
      <Profile />
      <Footer />
      <div>
        <input
          type="text"
          value={user?.name || ''}
          onChange={handleUserChange}
          placeholder="Enter username"
        />
         <div className={theme}>
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        <span className="slider"></span>
      </label>
    </div>
      </div>
    </div>
  );
};


const MainWithLoading = withLoadingIndicator(Main);

export default Seminar5;