import { Link } from "react-router-dom";
// import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import EditProfileBeneficiary from "../beneficiary/EditProfileBeneficiary";

function Profile() {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [user, setUser] = useState([]);
  const [userAllDonatedPosts, setUserAllDonatedPosts] = useState([]);
  const [userAllDonatedPostsF, setUserAllDonatedPostsF] = useState([]);

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id);
        setUserName(response.data.user.username);
        console.log(response.data.user.id); // Log the updated userId
        console.log(response.data.user.username); // Log the updated userName

        axios
          .get(`http://localhost:5000/api/users/${response.data.user.id}`)
          .then((response) => {
            setUser(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
        let id000 = response.data.user.id;
        try {
          const response = await axios.get(
            `http://localhost:5000/api/beneficiarysCards/${id000}`
          );
          console.log(response.data);
          setUserAllDonatedPosts(response.data);
        } catch (error) {
          console.error("Error retrieving data:", error);
        }
        try {
          const response = await axios.get(
            `http://localhost:5000/api/beneficiarysCardsF/${id000}`
          );
          console.log(response.data);
          setUserAllDonatedPostsF(response.data);
        } catch (error) {
          console.error("Error retrieving data:", error);
        }
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
      fetchProtectedData();
    }
  }, []);

  console.log(userId); // This may log the initial value or undefined
  console.log(userName);
  console.log(user);
  console.log(userAllDonatedPosts);

  //   useEffect(() => {
  //     // Fetch user data from MongoDB
  //     handlePosts(userId)
  //   }, []); // Add userId as a dependency
  // console.log(userAllDonatedPosts)

  // const handlePosts =async(userId0)=>{
  //   try {
  //     const response = await axios.get(`http://localhost:5000/api/beneficiarysCards/${userId0}`);
  //     console.log(response.data)
  //     setUserAllDonatedPosts(response.data)
  //   } catch (error) {
  //     console.error("Error retrieving data:", error);
  //   }
  // }

  return (
    <>
    {/* component */}
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />

    <main className="profile-page">
      <section className="relative block h-500-px">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          />
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center mt-5">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
               {user[0]?.firstName}
                  </h3>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                  <EditProfileBeneficiary/>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                   
                  
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-inbox mr-2 text-lg text-blueGray-400" />
                  {user[0]?.email}
                </div>

                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-phone mr-2 text-lg text-blueGray-400" />
                  0797777777
                </div>
              </div>
              {/* )} */}

              {/* Donations cards  */}
              <div className="w-full md:w-1/2">
            {/* <!-- Right side content --> */}
            <div className="w-full max-w-md mx-auto mt-8">
              <div className="flex border-b border-gray-300">
                <button
                  className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tl-lg focus:outline-none ${
                    activeTab === "tab1" ? "active:bg-gray-200" : ""
                  }`}
                  onClick={() => openTab("tab1")}
                >
                  current orders
                </button>
                <button
                  className={`w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tr-lg focus:outline-none ${
                    activeTab === "tab2" ? "active:bg-gray-200" : ""
                  }`}
                  onClick={() => openTab("tab2")}
                >
                  previous orders
                </button>
              </div>
              <div
                id="tab1"
                className={`tabcontent p-4 ${
                  activeTab === "tab1" ? "" : "hidden"
                }`}
              >
                <>
                  <h2 className="text-2xl font-bold text-gray-800">
                    My Donations
                  </h2>

                  {userAllDonatedPosts?.map((Post) => {
                    return (
                      <div className="flex flex-row flex-wrap   rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                        
                        <div className="sm:ml-4 sm:flex sm:w-full mt-5 ">
                        
                            <div className="flex flex-wrap gap-5 flex-column items-center">
                              <div className="justify-start">
                              <p className="text-lg my-5"><span className="font-bold">beneficiary : </span>  {Post.Name} </p>
                              <p className="text-lg my-5"><span className="font-bold"> The amount needed : </span>{Post.price}</p>
                              <p className="text-lg my-5">
                                {" "}
                                <span className="text-md font-bold">  My Donation : </span>{Post.currentDonation}{" "}
                              </p>
                              </div>
                          </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      <span className="font-bold" style={{color:'#219d80'}}>GIVE LIFE</span> THANK YOU FOR YOUR DONATION
                      </p>
                    </div>
                  </div>
                </div>
                      </div>
                    );
                  })}
                </>
              </div>
              <div
                id="tab2"
                className={`tabcontent p-4 ${
                  activeTab === "tab2" ? "" : "hidden"
                }`}
              >
                <>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Previous Donations
                  </h2>

                  {userAllDonatedPostsF?.map((Post) => {
                    return (
                   <div className="flex flex-row flex-wrap   rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                        
                        <div className="sm:ml-4 sm:flex sm:w-full mt-5 ">
                        
                            <div className="flex flex-wrap gap-5 flex-column items-center">
                              <div className="justify-start">
                              <p className="text-lg my-5"><span className="font-bold">beneficiary : </span>  {Post.Name} </p>
                              <p className="text-lg my-5"><span className="font-bold"> The amount needed : </span>{Post.price}</p>
                              <p className="text-lg my-5">
                                {" "}
                                <span className="text-md font-bold">  My Donation : </span>{Post.currentDonation}{" "}
                              </p>
                              </div>
                          </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      <span className="font-bold" style={{color:'#219d80'}}> GIVE LIFE</span> THANK YOU FOR YOUR DONATION
                      </p>
                    </div>
                  </div>
                </div>
                      </div>
                      
                    );
                  })}
                  
                </>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        
        <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with the support of {user[0]?.firstName}

                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  </>
   
  );
}

export default Profile;
