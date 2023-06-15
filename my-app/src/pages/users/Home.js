import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import Hero from "../../components/users/Hero"
import Cards from "../../components/users/Cards"
const Home = () => {

    const [selectedType, setSelectedype] = useState('');
    const navigate = useNavigate();
  
    
  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/SignUp/${SignUpType}`);
  }

  return (
  <>
    {/* <Button onClick={() => handleTypeSelection("user")}>Home user</Button>
   <Button onClick={() => handleTypeSelection("beneficiary")}>Home beneficiary</Button> */}

   <Hero/>
   <Cards/>
</>

  
  )
}

export default Home