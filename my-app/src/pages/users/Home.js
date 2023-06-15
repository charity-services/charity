import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {

    const [selectedType, setSelectedype] = useState('');
    const navigate = useNavigate();
  
    
  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/SignUp/${SignUpType}`);
  }

  return (
 <>
    <button onClick={() => handleTypeSelection("user")}>Home user</button>
   <button onClick={() => handleTypeSelection("beneficiary")}>Home beneficiary</button>
 </>

  
  )
}

export default Home