import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSource } from "../api/uploadApi";

export const Staging = () => {
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState({});
  let TABLE_ROWS = [];
  useEffect(() => {
    getSource(setSource);
  }, []);

  const TABLE_HEAD = ["Table", "No. of Records"];
  if (source != null) {
    source.map((d) => {
      console.log(d);
      TABLE_ROWS.push({ name: d.name, records: d.noOfRows });
    });
  }
  // const TABLE_ROWS = [
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //   },
  //   {
  //     name: "Alexa Liras",
  //     job: "Developer",
  //   },
  //   {
  //     name: "Laurent Perrier",
  //     job: "Executive",
  //   },
  // ];

  // useEffect(() => {
  //   setSorce({
  //     "Claims Table": [
  //       "claim Id",
  //       "Claimant",
  //       "Name",
  //       "Policy ID",
  //       "Claim Status",
  //       "Claim Amount",
  //       "Claim Date",
  //     ],
  //     "Policy Holder Table": [
  //       "Policy ID",
  //       "Policy Holder Name",
  //       "Contact Number",
  //       "Policy Details",
  //     ],
  //   });
  // }, []);
  const TABLE_ROWS2=[{name:"Claims",records:"123"}, {name:"Policy Holder details",records:"100"}, {name:"Adjuster Details",records:"150"}, {name:"Payment Details",records:"200"}]
  return (
    <>
      <Typography variant="h5" color="gray" className=" mx-5 my-4">
        Staging Area
      </Typography>
      <div className="flex h-screen">
        <div className="border-5 border-gray-300 border-r w-[50%] ">
          <Typography
            variant="h5"
            color="gray"
            className=" mx-3 my-4 text-center"
          >
            Sedgwick Source Data
          </Typography>
          <Card className=" ">
            <table className=" table-auto text-left m-10">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-[#2185D0] p-4 "
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none opacity-70 text-white font-bold"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.length != 0 &&
                  TABLE_ROWS.map(({ name, records }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {records}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>

          {/* <Typography variant="h6" color="gray" className=" mx-3">
            Claims Table
          </Typography>
          <Typography color="gray" className=" mx-3 ">
            claim Id,Claimant,Name,Policy ID,Claim Status,Claim Amount,Claim
            Date
          </Typography>

          <Typography variant="h6" color="gray" className=" mx-3">
            Policy Holder Table:
          </Typography>
          <Typography color="gray" className=" mx-3 ">
            Policy ID,Policy Holder Name,Contact Number,Policy Details
          </Typography> */}
        </div>
        <div className="w-[50%] ">
          <Typography
            variant="h5"
            color="gray"
            className=" mx-3 my-4 text-center"
          >
            Ace Target Data
          </Typography>
          <Card className=" ">
            <table className=" table-auto text-left m-10">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-[#2185D0]  p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 text-white font-bold"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS2.map(({ name, records }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {records}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          {/* <Typography variant="h6" color="gray" className=" mx-3">
            Claims Table
          </Typography>
          <Typography color="gray" className=" mx-3 ">
            claim Id,Claimant,Name,Policy ID,Claim Status,Claim Amount,Claim
            Date
          </Typography>

          <Typography variant="h6" color="gray" className=" mx-3">
            Policy Holder Table:
          </Typography>
          <Typography color="gray" className=" mx-3 ">
            Policy ID,Policy Holder Name,Contact Number,Policy Details
          </Typography> */}
          <div className="w-full p-4 text-right">
            <Link to="/upload/staging/mapping">
              <button
                variant="text"
                className="bg-orange-700 text-white hover:bg-orange-500 px-3 ml-2 mt-5 h-10 rounded "
              >
                Submit for mapping
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};
