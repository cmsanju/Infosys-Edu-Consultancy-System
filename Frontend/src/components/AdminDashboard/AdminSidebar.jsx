import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './AdminSidebar.css'; // Import the CSS for the sidebar

const AdminSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Change default state to open the sidebar by default

  // Toggle the sidebar open and closed
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-sidebar-container ${isSidebarOpen ? 'open' : 'closed'}`}>
    
      {/* Sidebar Menu */}
      <ul>
        <li>
          <Link to="/admindashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/adminusers">Users</Link>
        </li>
        <li>
          <Link to="/adminpayment">Payments</Link>
        </li>
        <li>
          <Link to="/adminsubscription">Subscriptions</Link>
        </li>
        <li> <Link to="/">Feedback</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
