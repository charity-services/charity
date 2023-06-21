import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  
  const [test, setTest] = useState([]);
  const [closeNav, setCloseNav] = useState();
  const [profileRefresh, setProfileRefresh] = useState();


  const updateTest = (newValue) => {
    setTest(newValue);
  };
  const updateNav = (newValue) => {
    setCloseNav(newValue);
  };
  const updateProfileRefresh = (newValue) => {
    setProfileRefresh(newValue);
  };



  

  return (
        <>
            <UserContext.Provider
                value={{
                 test,updateTest,closeNav,updateNav,profileRefresh,updateProfileRefresh
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;




