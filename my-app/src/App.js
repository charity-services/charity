import "./App.css";
import { UserContext } from "./UserContext";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  //------------------  user  ----------------------- //
import NavListMenu from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/aboutPage/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Home from "./pages/users/Home";

//------------------  Beneficiary  ----------------------- //
import HomeBeneficiary from "./pages/beneficiary/HomeBeneficiary"




//------------------ Dashboard  ----------------------- //

import Sidebar from "./pages/dashboard/Sidebar";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import MainDashboard from "./pages/dashboard/MainDashboard";

import UserInfo from "./components/dashboard/UserInfo"
import ApproveTable from "./components/dashboard/ApproveTable";
import AdminInfo from "./components/dashboard/AdminInfo";


import axios from "axios";

export default function App() {
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);

  // const { routs, updateRouts } = useContext(UserContext);


  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      console.log(token);
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let x =[];
        
        if(response.data.user.role ==1){
          x= [true ,false,true ]
        }else if (response.data.user.role ==2){
          x= [true ,true,false]
        }else{
          x= [false ,true,true ]
        }
        setHideRouterUser(x[0]);
        setHideRouterAdmin(x[1]);
        setHideRouterProvider(x[2]);
        // updateRouts(x)

      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };







  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData()
    }else{
      setHideRouterUser(false);
      setHideRouterAdmin(true);
      setHideRouterProvider(true);
    }
  }, []);

  //------------------  user Router ----------------------- //
  const AppRouter1 = () => {
    return (
      <Router>
        <NavListMenu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="ContactUs" element={<Contact />} /> 
          <Route path="About" element={<About />} /> 
          <Route path="/SignUp/:type" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />

        </Routes>
        <Footer />
      </Router>
    );
  };

   //------------------  Dashboard Router ----------------------- //
  const AppRouter2 = () => {
    return (
      <Router>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <NavListMenuD />
          <Routes>
            <Route index element={<MainDashboard />} />
            <Route path="ListUser" element={<UserInfo />} />
            {/* <Route path="UserProfile" element={<UserProfile />} /> */}
            <Route path="ListRestaurant" element={<ApproveTable />} />
            <Route path="ListAdmin" element={<AdminInfo />} />
          </Routes>
        </div>
      </Router>
    );
  };

  //------------------  Beneficiary Router ----------------------- //
  const AppRouter3 = () => {
    return (
      <Router>
        <NavListMenu />
        <Routes>
          <Route index element={<HomeBeneficiary />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<About />} />
          {/* <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} /> */}
        </Routes>
        <Footer />
      </Router>
    );
  };

  return (
    <>
      {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}

      {hideRouter2 ? null : (
        <>
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}

      {hideRouter3 ? null : (
        <>
          <AppRouter3 />
        </>
      )}
 
    </>

  );
}
