import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/SignUp/${SignUpType}`);
  }

  return (
    <>
      {/* <section className="relative bg-[url(https://www.quotemaster.org/images/5b/5bf4e1eca4b8d60c023cb524ed608b5e.jpg)] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
              <Button
                className="border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                variant="text"
                onClick={() => handleTypeSelection("user")}
              >
                user
              </Button>

              <Button
                className="border mb-10 border-solid border-[#7C9070] border-2 text-[#7C9070] hover:bg-[#7C9070] hover:text-[#ffffff]"
                variant="text"
                onClick={() => handleTypeSelection("beneficiary")}
              >
                beneficiary
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://woodgreen.org.uk/wp-content/uploads/2022/03/smiling-woodgreen-team-member-with-dog.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Give Life
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              We believe in creating a world where every animal is treated with
              love, care, and respect. With your support, we can make a
              difference and provide a brighter future for animals in need.
            </p>
            <p>Register Now</p>
            <div className="flex items-center">
              
              {
              localStorage.auth == null ? (
                <>
                  <Button
                    className="mr-5 border mb-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("user")}
                  >
                    user
                  </Button>
                  <Button
                    className="border mb-10 border-solid border-[#219D80] border-2 text-[#219D80] hover:bg-[#219D80] hover:text-[#ffffff]"
                    variant="text"
                    onClick={() => handleTypeSelection("beneficiary")}
                  >
                    beneficiary
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
