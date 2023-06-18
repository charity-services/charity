import EditProfileBeneficiary from "./EditProfileBeneficiary";
import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import Cards from "./CardsBeneficiary";

function ProfileBeneficiary() {
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState({});

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
        console.log(response.data.user.id);
        let id = response.data.user.id;
        try {
          const response = await axios.get(
            `http://localhost:5000/api/beneficiaryCardsP/${id}`
          );
          const data = response.data;
          console.log(data);

          setCards(data);
        } catch (error) {
          console.error("Error:", error);
        }
        try {
          const response = await axios.get(
            `http://localhost:5000/api/users/${id}`
          );
          console.log(response.data);
          console.log(
            "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          );
          setUserData(response.data[0]);
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
    console.log("majdi")
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);

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
                      {userData.firstName}
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
                          {cards?.length}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          change you made
                        </span>
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
                <Cards />
                {/* Donations cards  */}
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Helping animals is essential for maintaining the
                        delicate balance of ecosystems and preserving
                        biodiversity, ultimately benefiting the health and
                        sustainability of our planet.
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
                    Made with the support of {userData.firstName}
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

export default ProfileBeneficiary;
