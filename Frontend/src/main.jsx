import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './components/UserContext.jsx'
import { CourseProvider } from './components/CourseContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   

    <CourseProvider>
    <UserProvider>
    <App />
  </UserProvider>
  </CourseProvider>
    
   
    
    </BrowserRouter>
 


  </React.StrictMode>,
)
