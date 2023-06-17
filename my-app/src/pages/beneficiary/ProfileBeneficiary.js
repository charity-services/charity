import EditProfileBeneficiary from './EditProfileBeneficiary'
import { useState, useEffect } from 'react'
import * as React from 'react';
import { useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';


function ProfileBeneficiary() {
  const [userId ,setUserId] = useState()
  const [userData ,setUserData] = useState({})
  
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id)
        console.log(response.data.user.email)
        setUserData(response.data.user)
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("auth");
      window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };


useEffect(()=>{
  if(localStorage.auth != null){   
    fetchProtectedData()
  }
},[])
//   const getData = async () => {
// try {
//   const token = localStorage.getItem("token") || " "
//   console.log(token)
//   const [respons]=await axios.get('http://localhost:5000/api/users/:id',{headers: {
//     authorization: `Bearer ${token}`,
//   },})
//   const userData=respons.data;
//   console.log(userData)
// } catch (error) {
//   console.error(error)

// }
  
//   }
//   useEffect(()=>{
//     getData();
//   },[])
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
                'url("https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&w=600")'
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
                      {userData.username}
                    </h3>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <EditProfileBeneficiary />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-inbox mr-2 text-lg text-blueGray-400" />
                    {userData.email}
                  </div>

                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-phone mr-2 text-lg text-blueGray-400" />
                    0797777777
                  </div>
                </div>
                {/* )} */}

                {/* Donations cards  */}
                <div className='flex flex-row flex-wrap'>
                  <Card sx={{ maxWidth: 345, margin: 3 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&w=600"
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cause
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <div className="w-75 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700" style={{ marginRight: '1rem', marginLeft: '1rem' }}>
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "45%" }} />
                    </div>

                  </Card>
                  <Card sx={{ maxWidth: 345, margin: 3 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&w=600"
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cause
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>

                  </Card>
                  <Card sx={{ maxWidth: 345, margin: 3 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://images.pexels.com/photos/459326/pexels-photo-459326.jpeg?auto=compress&cs=tinysrgb&w=600"
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cause
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>

                  </Card>

                </div>


                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a warm,
                        intimate feel with a solid groove structure. An artist of
                        considerable range.
                      </p>

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
                    Made with{" "}
                    Love
                    by{" "}


                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>

  )
}

export default ProfileBeneficiary