import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import logo from '/src/assets/logo.png';
import menu_icon from '/src/assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { UserContext } from './UserContext';

const Navbar = ({ setShowLogin }) => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    handleMenuClose();
    localStorage.removeItem('user');
    navigate('/');
  };

  const isDarkNavPage = location.pathname === '/product' || location.pathname === '/payment' || location.pathname === '/mycourses';

  // Do not render Navbar on the admin dashboard
  

  return (
    <nav className={`container ${sticky || isDarkNavPage ? 'dark-nav' : ''}`}>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
              Home
            </ScrollLink>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
              About us
            </ScrollLink>
          ) : (
            <Link to="/">About us</Link>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </ScrollLink>
          ) : (
            <Link to="/">Testimonials</Link>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="contact" smooth={true} offset={-170} duration={500}>
              Contact Us
            </ScrollLink>
          ) : (
            <Link to="/">Contact Us</Link>
          )}
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>

        {user ? (
          <li>
            <AccountCircleIcon
              fontSize="large"
              onClick={handleMenuClick}
              style={{ cursor: 'pointer' }}
            />
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </li>
        ) : (
          <li>
            <button className="btn" onClick={() => setShowLogin(true)}>Get Started</button>
          </li>
        )}
      </ul>

      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
