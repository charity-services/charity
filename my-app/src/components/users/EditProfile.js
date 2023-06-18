import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function EditProfile() {
const navigate=useNavigate();
 

  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const newData = { firstName: newName, email: newEmail }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  }




  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [user, setUser] = useState([]);

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
            setUser(response.data)
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
       
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


  useEffect(() => {
 
  }, []);

  console.log(userId); // This may log the initial value or undefined
  console.log(userName)
  console.log(user)




  const handleSubmit = () => {
    axios.put(`http://localhost:5000/api/users/${userId}`, newData)
    .then((response) => {
      console.log(response.data)

    })
    .catch((err) => {
      console.error('Error Update user data:', err);
    })

    // window.location.href="http://localhost:3000/ProfilePage";
    navigate("/ProfilePage")
    
  }


  return (
    <>

      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-black-900">Edit Profile</h2>
            <br />
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">

                <form className="lg:col-span-2" onSubmit={handleSubmit}>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder={user[0]?.firstName}
                          onChange={handleNameChange}
                        />
                      </div>
                      <br />
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          defaultValue=""
                          placeholder={user[0]?.email}
                          onChange={handleEmailChange}
                        />
                      </div>
                      {/* <br />
                        <div className="md:col-span-5">
                          <label htmlFor="phone_number">Phone Number</label>
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            placeholder="07XXXXXXXX"
                            
                          />
                        </div> */}
                      <br />
                      {/* <div className="md:col-span-5">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            id="passwoord"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            defaultValue=""
                            placeholder="*******"
                          
                          />
                        </div> */}






                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <br />
                          <br />
                          <br />
                          {/* <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                              
                            </button> */}

                          
                            <Button type='submit'
                              className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
                              variant="text"

                            >
                              Save
                            </Button>
                         
                        </div>
                      </div>
                    </div>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default EditProfile