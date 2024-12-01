import React from 'react'
import Users from './Users'
import AdminPayment from './AdminPayment'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import AdminSubscription from './AdminSubscription'
import "./AdminDashboard.css"
import AdminNavbar from './AdminNavbar'
function AdminDashboard() {
  return (
    <div>
      <AdminNavbar/>
    <div className="admin-container">
      
    <AdminSidebar />  
   <div className="admin-content">
     <h1>Welcome to Admin Dashboard</h1>
     <p>Take full control of your website's content from one convenient location</p>
   </div>
   <Routes>
     <Route path="/adminusers" element={<Users />} />
     <Route path="/adminpayment" element={<AdminPayment />} />
     <Route path="/adminsubscription" element={<AdminSubscription />} />
   </Routes>
 </div>
 </div>
  )
}

export default AdminDashboard
