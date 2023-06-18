import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};

function EditCard(props) {
    console.log(props.id);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /////////////////////
  const [beneficiaryId, setbeneficiaryId] = useState();
  const [beneficiaryData, setbeneficiaryData] = useState({});
  const [des, setdes] = useState("");
  const [donationType, setdonationType] = useState("");
  const [donationCase, setdonationCase] = useState("");
  const [price, setprice] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data.user.donationCase);
        let id = response.data.user.id;
        try {
          const response = await axios.get(
            `http://localhost:5000/api/beneficiarys/${props.id}`
          );
          console.log(response.data);
          console.log(
            "tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          );
          setbeneficiaryData(response.data[0]);
          setdes(response.data[0].des);
          setdonationCase(response.data[0].donationCase);
          setdonationType(response.data[0].donationType);
          setprice(response.data[0].price);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(des, donationCase, donationType, price, des);
    axios
      .put(`http://localhost:5000/api/beneficiarys/${props.id}`, {
        donationCase: donationCase,
        donationType: donationType,
        des: des,
        price: price,
      })
      .then(function (response) {
        console.log(response);
        // navigate("/ProfilePage")
        window.location.href = "http://localhost:3000/ProfilePage";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Button
        className="m-5 border-solid border-[#219d80] border-2 text-[#219d80] hover:bg-[#219d80] hover:text-[#ffffff]"
        variant="text"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <Input
              type="select"
              onChange={(e) => setdonationCase(e.target.value)}
              value={donationCase}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <Input
              type="select"
              onChange={(e) => setdonationType(e.target.value)}
              value={donationType}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <Input
              type="select"
              onChange={(e) => setprice(e.target.value)}
              value={price}
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <Input
              onChange={(e) => setdes(e.target.value)}
              value={des}
              type="text"
              variant="h6"
              component="h2"
              className="m-5"
            >
              Text in a modal
            </Input>{" "}
            <br></br>
            <Button
              onClick={handleSubmit}
              className=" m-5 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
              variant="text"
            >
              Edit
            </Button>
            <Button
              className="m-5 border-solid border-[#219d80] border-2 text-[#219d80] hover:bg-[#219d80] hover:text-[#ffffff]"
              variant="text"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditCard;
