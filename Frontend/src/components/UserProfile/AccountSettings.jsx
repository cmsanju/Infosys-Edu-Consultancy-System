
import React, { useContext, useState, useEffect } from 'react';
import './AccountSettings.css';
import { UserContext } from '../UserContext';

const AccountSettings = () => {
  const { user, setUser } = useContext(UserContext); // Fetch user data and setUser function from context
  const [formData, setFormData] = useState({
    name: user?.username || '',
    email: user?.email || '',
    password: user?.password || '',
  });

  // Use useEffect to sync the formData with user data from context
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.username,
        email: user.email,
        password: user.password || '',
      });
    }
  }, [user]); // Update formData whenever user data changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Update the UserContext and localStorage with new user data
    setUser({
      ...user,
      username: formData.name,
      email: formData.email,
      password: formData.password,
    });

    // Save changes to localStorage
    localStorage.setItem('user', JSON.stringify({
      username: formData.name,
      email: formData.email,
      password: formData.password,
    }));

    alert('Changes saved successfully!');
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">
            Your Name <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="password"
          />
        </div>
      </div>

      <button className="mainbutton1" onClick={handleSaveChanges}>
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
