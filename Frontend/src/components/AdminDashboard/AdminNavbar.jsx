import React from 'react';
import './AdminNavbar.css'; // Ensure this CSS file contains your provided styles
import logo from '/src/assets/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminName');
    setAnchorEl(null);
    navigate('/');
  };

  // Get admin name from localStorage (set after login)
  const adminName = localStorage.getItem("adminName");

  return (
    <div className="admin-navbar">
      {/* Admin Logo */}
      <img
        src={logo}
        alt="Admin Logo"
        className="admin-logo"
        onClick={() => navigate('/')}
      />

      {/* Right Section */}
      <div className="admin-navbar-right">
        <span className="admin-greeting">Hi, {adminName || 'Admin'}</span> {/* Display admin name */}
        <AccountCircleIcon fontSize="large" onClick={handleMenuClick} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate('/')}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default AdminNavbar;
