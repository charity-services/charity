import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Cards() {
  let x = [1, 1, 1, 1,1];
  const [FilterDataUsers, setFilterDataUsers] = useState(x);

  const [currentPageUsers, setCurrentPageUsers] = useState(1);

  let totalItemsUsers;

  let totalPagesUsers;

  let slicedArrayUsers;

  const itemsPerPage = 4;

  totalItemsUsers = FilterDataUsers.length;

  totalPagesUsers = Math.ceil(totalItemsUsers / itemsPerPage);

  const startIndexUsers = (currentPageUsers - 1) * itemsPerPage;

  const endIndexUsers = startIndexUsers + itemsPerPage;

  slicedArrayUsers = FilterDataUsers.slice(startIndexUsers, endIndexUsers);

  const handlePageChangeUsers = (event, pageNumber) => {
    setCurrentPageUsers(pageNumber);
  };

  return (
    <>
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              // value={searchTermUsers}
              onChange={(e) => {
                // setSearchTermUsers(e.target.value);
                // filterDataByNameUsers(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-1  gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance mr-5"
                // value={yourSelectedStateValueType}
                // onChange={(e) => setOptionType(e.target.value)}
              >
                <option value="">All Type</option>
                <option value="arabian">arabian</option>
                <option value="italian">italian</option>
              </select>

              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-[#E8AA42] border-2 focus:border-[#E8AA42] focus:bg-white focus:ring-0 text-sm appearance"
                // value={yourSelectedStateValueAddress}
                // onChange={(e) => setOptionAddress(e.target.value)}
              >
                <option value="">All Addresses</option>
                <option value="amman">amman</option>
                <option value="zarqa">zarqa</option>
                <option value="balqa">balqa</option>
              </select>
            </div>

            <Button
              className="border border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
              variant="text"
              // onClick={handleFind}
            >
              Find
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  sm:grid-cols-1 xl:grid-cols-4    place-items-center">
        {slicedArrayUsers.map(() => {
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
                    Medical
                  </Typography>
                  <Typography variant="h5" className="mb-2 text-[#7C9070]">
                    $30/$100
                  </Typography>
                </div>
                <Typography>
                  Donate for poor peoples treatment and medicine.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 flex justify-around">
                <div className="flex" >
                <Button
                  className="mr-2 border mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                  variant="text"
                >
                  10$
                </Button>

                <Button
                  className="border mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                  variant="text"
                >
                  20$
                </Button>
                </div>
                <Button
                  className="border mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                  variant="text"
                >
                  30$
                </Button>

              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="flex w-full justify-center mt-5 bg-[#f8f8f8] mb-5">
        {
          <Pagination
            color="warning"
            count={totalPagesUsers}
            page={currentPageUsers}
            onChange={handlePageChangeUsers}
          />
        }
      </div>
    </>
  );
}
