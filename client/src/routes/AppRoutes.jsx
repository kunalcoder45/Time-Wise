import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginForm from "../screens/login.jsx";
// import { useState, useEffect } from "react";
import RegisterForm from "../screens/register.jsx";
import Home from "../components/home/home.jsx";
import Navbar from "../components/navbar/navbar.jsx";
import NotFound from "../components/404Page/404.jsx";
import Hero from "../components/home/hero/hero.jsx";
import TimelineWithProgress from "../components/home/Timeline/VerticalTimelineComponent.jsx";
import ShowCase from "../components/home/showCase/showCase.jsx";
import ContactUs from "../components/home/Contact/ContectSection.jsx";
import Footer from "../components/home/Footer/Footer.jsx";
import Logout from "../screens/logout.jsx";
// import axios from "../config/axios.js";

const AppRoutes = () => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true); // State to track loading status

  // const getUser = async () => {
  //   try {
  //     const url = import.meta.env.REACT_APP_URL || "http://localhost:8080";
  //     const SUCCESS_URL = `${url}/auth/login/success`; // Fixed the URL
  //     const { data } = await axios.get(SUCCESS_URL, { withCredentials: true });
  //     setUser(data.user._json); // Assuming the user data is in this format
  //   } catch (error) {
  //     console.error("Failed to get user:", error);
  //   } finally {
  //     setLoading(false); // Set loading to false once the request is completed
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Placeholder while fetching user data
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/> {/* Pass user to Navbar */}
              <Hero />
              <TimelineWithProgress />
              <ShowCase />
              <ContactUs />
              <Footer />
              <Home />
            </>
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/logout" element={<Logout />} />

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
