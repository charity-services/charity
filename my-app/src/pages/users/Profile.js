import { Link } from "react-router-dom";
// import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
      <div className="h-screen bg-gray-200 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 ms:1/3">
            {/* <!-- Left side content --> */}
            <div className="h-screen bg-gray-200   pt-8">
              <div>
                <div className="w-full ms-8 mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                      <img
                        className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                        src="https://randomuser.me/api/portraits/women/21.jpg"
                        alt=""
                      />

                      <div className="py-2">
                        <h3 className="font-bold text-2xl mb-1"></h3>
                        {user[0]?.firstName}
                      </div>
                    </div>
                    <div className="flex gap-2 px-2  justify-center ">
                      <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-center">
                        <Link to="/EditProfile">
                          <Button
                            className="border mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                            variant="text"
                          >
                            Edit Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-4 w-full ">
                    <div className="flex gap-2 items-center text-gray-800r mb-4">
                      <div className="bg-white w-full shadow overflow-hidden sm:rounded-lg">
                        <div className="border-t border-gray-200">
                          <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-gray-500">
                                Full name
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user[0]?.firstName}
                              </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-gray-500">
                                Email address
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user[0]?.email}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="flex"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <h2 className="text-lg font-bold text-gray-800">
                    current orders
                  </h2>

                  {userAllDonatedPosts?.map((Post) => {
                    return (
                      <div class="justify-between  rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                        <img
                          src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                          alt="product-image"
                          class="w-full rounded-lg sm:w-40"
                        />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900"></h2>
                            <p class="mt-1 text-xs text-gray-700"></p>
                          </div>
                          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center space-x-4">
                              <p class="text-sm"> Name {Post.Name} </p>
                              <p class="text-sm"> price {Post.price}</p>
                              <p class="text-sm">
                                {" "}
                                currentDonation {Post.currentDonation}{" "}
                              </p>
                              {/* <button onClick={() => {
          Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to cancel yoir reservation?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: 'orange',
            confirmButtonText: 'OK',
            cancelButtonColor: 'orange',
            cancelButtonText: 'Cancel',
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire('Success!', 'Your order was cancelled successfully!', 'success');

              setTimeout(function () {
                // window.location.reload();
              }, 2000);

            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // User clicked Cancel or closed the modal
              Swal.fire('Cancelled', 'cancelled.', 'error');
            }
          });
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
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
                  <h2 className="text-lg font-bold text-gray-800">
                    previous orders
                  </h2>

                  {userAllDonatedPostsF?.map((Post) => {
                    return (
                      <div class="justify-between  rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
                        <img
                          src="https://f.hubspotusercontent20.net/hubfs/3390327/WordPress-Table-Reservation-plugin-1000x562-1.jpg"
                          alt="product-image"
                          class="w-full rounded-lg sm:w-40"
                        />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900"></h2>
                            <p class="mt-1 text-xs text-gray-700"></p>
                          </div>
                          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center space-x-4">
                              <p class="text-sm"> Name {Post.Name} </p>
                              <p class="text-sm"> price {Post.price}</p>
                              <p class="text-sm">
                                {" "}
                                currentDonation {Post.currentDonation}{" "}
                              </p>
                              {/* <button onClick={() => {
                              Swal.fire({
                                title: 'Confirmation',
                                text: 'Are you sure you want to cancel yoir reservation?',
                                icon: 'question',
                                showCancelButton: true,
                                confirmButtonColor: 'orange',
                                confirmButtonText: 'OK',
                                cancelButtonColor: 'orange',
                                cancelButtonText: 'Cancel',
                              }).then((result) => {
                                if (result.isConfirmed) {

                                  Swal.fire('Success!', 'Your order was cancelled successfully!', 'success');

                                  setTimeout(function () {
                                    // window.location.reload();
                                  }, 2000);

                                } else if (result.dismiss === Swal.DismissReason.cancel) {
                                  // User clicked Cancel or closed the modal
                                  Swal.fire('Cancelled', 'cancelled.', 'error');
                                }
                              });
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button> */}
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
    </>
  );
}

export default Profile;
