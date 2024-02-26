import React, { useState, useRef } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa6";
import { FaSitemap } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { upload } from "../api/uploadApi";
// import { Select, Option } from "@material-tailwind/react";

export const Upload = () => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState(null);
  const [tpaName, setTpaName] = useState("");
  // const [cols, setCols]=useState("")
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };
  console.log(file);
  return (
    <div className="flex h-[590px]">
      {/* <Card className=" max-w-[24rem] h-[100%]"> */}
      <div className="border-5 border-gray-300 border-r  w-[25%]">
        <Typography variant="h5" color="gray" className=" mx-3 my-4">
          Extract
        </Typography>
        <Typography variant="h6" color="gray" className=" mx-3 my-4">
          Choose TPA Name
        </Typography>
        <div className="w-72 mx-2 ">
          <Select
            label="Select TPA"
            onChange={(e) => {
              console.log(e);
              setTpaName(e);
            }}
          >
            <Option value="Sedgwick">Option 1</Option>
            <Option value="UMR Inc.">Option 2</Option>
            <Option value="Gallagher Bassett">Option 3</Option>
            <Option value="CorVel Corp.">Option 4</Option>
          </Select>
        </div>
        <Typography variant="h6" color="gray" className=" mx-3 mt-7 mb-4">
          Load data from external TPA
        </Typography>

        {/* <a href="#" className="inline-block"> */}
        <button
          variant="text"
          className="bg-orange-700 text-white hover:bg-orange-500 px-[30%] ml-2 h-10 rounded "
          onClick={() => {
            setPopup(true);
          }}
        >
          Upload CSV
        </button>

        {/* </a> */}
      </div>

      <div className="w-[55%] z-10 m-auto">
        {data !== null ? (
          <>
            <Typography variant="h4" color="gray" className=" mx-3">
              {tpaName + " Data Info"}
            </Typography>
            {data.map((d) => {
              console.log(d);
              let cols = "";
              d.columns.map((c) => {
                cols += c.name + ", ";
              });

              return (
                <>
                  <div className="my-2 ">
                    <Typography variant="h6" color="gray" className=" mx-3">
                      {d.name + " Table"}
                    </Typography>

                    <Typography color="gray" className=" mx-3 ">
                      {cols}
                    </Typography>
                    {/* <Typography variant="h6" color="gray" className=" mx-3">
                      Policy Holder Table:
                    </Typography>
                    <Typography color="gray" className=" mx-3 ">
                      Policy ID,Policy Holder Name,Contact Number,Policy Details
                    </Typography> */}
                  </div>
                </>
              );
            })}
            <div className="float-right">
              <Link to="/upload/staging">
                <button
                  className="border-orange-700 border-2 hover:bg-orange-500 hover:text-white text-white bg-orange-700  px-5 h-9 rounded m-[10px] text-center items-center relative left-[40%] "
                  onClick={() => {
                    window.alert("are you sure you want to proceed?");
                  }}
                >
                  Proceed
                </button>
              </Link>
            </div>
            ;
          </>
        ) : (
          <>
            <Typography
              variant="h4"
              color="gray"
              className=" mx-3 text-center absolute left-[48%] top-[35%]"
            >
              3 step process for Data Mapping
            </Typography>
            <div className="w-full py-4 ">
              <Stepper
                // activeStep={activeStep}
                // isLastStep={(value) => setIsLastStep(value)}
                // isFirstStep={(value) => setIsFirstStep(value)}
                lineClassName="bg-orange"
              >
                <Step>
                  <FaUpload className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                      variant="h6"
                      // color={activeStep === 0 ? "blue-gray" : "gray"}
                    >
                      Step 1
                    </Typography>
                    <Typography
                      // color={activeStep === 0 ? "blue-gray" : "gray"}
                      className="font-normal"
                    >
                      Load data from external TPA
                    </Typography>
                  </div>
                </Step>
                <Step>
                  <FaSitemap className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                      variant="h6"
                      // color={activeStep === 1 ? "blue-gray" : "gray"}
                    >
                      Step 2
                    </Typography>
                    <Typography
                      // color={activeStep === 1 ? "blue-gray" : "gray"}
                      className="font-normal"
                    >
                      Transform and map the data
                    </Typography>
                  </div>
                </Step>
                <Step>
                  <GrValidate className="h-5 w-5" />
                  <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography variant="h6">Step 3</Typography>
                    <Typography className="font-normal">
                      Validate data and load in target
                    </Typography>
                  </div>
                </Step>
              </Stepper>
            </div>
          </>
        )}
      </div>
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-20 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[30%]  rounded overflow-hidden shadow-lg bg-white">
            <div className="">
              <div className="text-white mb-2 p-3 flex bg-orange-700 text-lg justify-between">
                Upload
                <RxCross2
                  size={25}
                  className="cursor-pointer"
                  onClick={() => {
                    setPopup(false);
                  }}
                />
              </div>
              <div className="text-center border-2 border-[#707070] border-dashed bg-[#D1D1D180]  m-8 rounded">
                <div
                  className="m-auto max-w-[100%]"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <FaCloudUploadAlt
                    size={40}
                    style={{
                      color: "gray",
                      margin: "auto",
                      marginTop: "25px",
                      marginBottom: "15px",
                    }}
                  ></FaCloudUploadAlt>
                  <p className="font-semi-bold">Drag and drop files here</p>
                  <div className="flex items-center mt-5">
                    <hr className="flex-grow border-t border-black ml-7" />
                    <span className="px-3">or</span>
                    <hr className="flex-grow border-t border-black mr-7" />
                  </div>
                  <input
                    type="file"
                    hidden
                    onChange={(event) => {
                      setFile(event.target.files[0]);
                    }}
                    accept=".xlsx"
                    ref={inputRef}
                  ></input>
                  <button
                    className="border-orange-500 border-2 hover:bg-orange-700 hover:text-white text-orange-500 bg-white  px-2 h-8 rounded m-[10px]"
                    onClick={() => {
                      inputRef.current.click();
                    }}
                  >
                    Browse Files
                  </button>
                </div>
                {file != null && <div className="mb-3">{file.name}</div>}
              </div>
              <div className="m-auto">
                <Link to="/upload/staging">
                  <button
                    className="border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-white bg-orange-700  px-2 h-8 rounded m-[10px] text-center items-center relative left-[40%] mb-7"
                    onClick={() => {
                      upload(file, setData);
                      setPopup(false);
                    }}
                  >
                    Upload
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
