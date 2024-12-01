import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import MyPrograms from "./components/MyPrograms/MyPrograms";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Blogs from "./components/Blogs/Blogs";
import Product from "./components/productfld/Product";
import LoginSignUp from "./components/LoginSignup/LoginSignup";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/UserProfile/Orders";
import JavaFullstack from "./components/Products/JavaFullstack";
import Learning from "./components/Products/Learning";
import DigitalMarketing from "./components/Products/DigitalMarketing";
import Payment from "./components/Payment/Payment";
import Courses from "./components/UserProfile/Courses";
import Admin from "./components/Admin/Admin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Users from "./components/AdminDashboard/Users";
import AdminPayment from "./components/AdminDashboard/AdminPayment";
import AdminSubscription from "./components/AdminDashboard/AdminSubscription";
import SingleBlog from "./components/Blogs/SingleBlog";
import AccountSettings from "./components/UserProfile/AccountSettings";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState(""); // Global username state

  const location = useLocation();

  // Define admin route paths
  const adminRoutes = [
    "/admin",
    "/admindashboard",
    "/adminusers",
    "/adminpayment",
    "/adminsubscription",
  ];

  // Check if the current route is an admin route
  const isAdminRoute = adminRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {/* Show login/signup popup if showLogin is true */}
      {showLogin && (
        <LoginSignUp setShowLogin={setShowLogin} setUsername={setUsername} />
      )}

      {/* Render Navbar only for non-admin routes */}
      {!isAdminRoute && <Navbar setShowLogin={setShowLogin} username={username} />}

      {/* Main Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle="OUR PRODUCTS" title="What We Offer" />
                <MyPrograms />
                <About setPlayState={setPlayState} />
                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard username={username} />} />
      
        <Route path="/javafullstack" element={<JavaFullstack />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminusers" element={<Users />} />
        <Route path="/adminpayment" element={<AdminPayment />} />
        <Route path="/adminsubscription" element={<AdminSubscription />} />
        <Route path="/account/settings" element={<AccountSettings />} />
        <Route path="/blogs/:id" element={<SingleBlog/>}/>
      </Routes>
    </>
  );
};

export default App;
