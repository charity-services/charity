import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Pagination from "@mui/material/Pagination";
  import { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  import axios from "axios";
  
  function Cards() {
      const [cards, setCards] = useState([]);
      const [userId ,setUserId] = useState()
  
  
      
          const fetchUserCards = async () => {
  
              try {
                  const token = localStorage.getItem("auth");
                  if (token) {
                    const response = await axios.get("http://localhost:5000/protected", {
                      headers: {
                        Authorization: token,
                      },
                    });
                    setUserId(response.data.user.id)
                    let id=response.data.user.id
                    console.log(id)
                    try {
                      const response = await axios.get(`http://localhost:5000/api/beneficiaryCardsP/${id}`); 
                      const data = response.data;
                      console.log(data)
  
                      setCards(data);
                    } catch (error) {
                      console.error('Error:', error);
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
          fetchUserCards();
        }, []);
  
    return (
      <div className="flex flex-row flex-wrap">
        {cards.map((POST) => {
          return (
            <Card className=" mt-10 w-[22rem] mr-3 ">
              <CardHeader color="blue-gray" className="relative h-57">
                <img
                  src="https://media.istockphoto.com/id/1303833951/photo/vet-doctor-examining-labrador-dog.jpg?b=1&s=612x612&w=0&k=20&c=9pXgoWE5ai_faijylnCLpyORSiGKG0jxqBsLlNdntE8="
                  alt="img-blur-shadow"
                  layout="fill"
                />
              </CardHeader>
              <CardBody>
                <div className="flex justify-between">
                  <Typography variant="h5" className="mb-2 text-[#7C9070]">
                    {POST.Name}
                  </Typography>
                  <Typography variant="h5" className="mb-2 text-[#7C9070]">
                    ${POST.currentDonation}/${POST.price}
                  </Typography>
                </div>
                <Typography>{/* {POST.des} */}</Typography>
                <Typography>{/* {POST.donationType} */}</Typography>
                <Typography>{/* {POST.donationCase} */}</Typography>
              </CardBody>
              <CardFooter className="pt-0 flex justify-around">
                <div className="flex">
                  <Button
                    className="mr-2  mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                    variant="text"
                  >
                    10$
                  </Button>
  
                  <Button
                    className=" mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                    variant="text"
                  >
                    20$
                  </Button>
                </div>
                <Button
                  className=" mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                  variant="text"
                >
                  {POST.price-POST.currentDonation}$
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  }
  
  export default Cards;
  