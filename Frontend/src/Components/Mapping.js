import React, { useEffect } from "react";
import ReactFlow, { Background, Controls, Panel } from "reactflow";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
 
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
 
export const Mapping = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
    console.log("efenfe");
  }, 4000);
  const sourceData = {
    tables: [
      {
        id: "table1",
        name: "Claims Details",
        columns: [
          { id: "s-column1", name: "claiment name" },
          { id: "s-column2", name: "claim status" },
        ],
      },
      {
        id: "table2",
        name: "Policy Holder Details",
        columns: [
          { id: "s-column3", name: "Policy Holder Name" },
          { id: "s-column4", name: "Policy Details" },
        ],
      },
    ],
  };
 
  const targetData = {
    tables: [
      {
        id: "table1",
        name: "Claims",
        columns: [
          { id: "t-column1", name: "status of claims" },
          { id: "t-column2", name: "Full name" },
        ],
      },
      {
        id: "table2",
        name: "Policy Holder",
        columns: [
          { id: "t-column3", name: "Holder's Name" },
          { id: "t-column4", name: "Policy info" },
        ],
      },
    ]
  };
 
  let nodes = [];
  let edges = [];
  let i = 0;
  let tableId = 0;
  let columnId = 0;
  sourceData.tables.forEach((data, index) => {
    tableId = columnId;
    nodes.push({
      id: (tableId++).toString(),
      position: { x: 150, y: (index + 1) * 100 },
      data: { label: data.name.toString() },
      type: "",
    });
    columnId = tableId;
    data.columns.forEach((d) => {
      nodes.push({
        id: (columnId++).toString(),
        position: { x: 400, y: (i + 1) * 100 },
        data: { label: d.name },
        type: "",
      });
      edges.push({
        id: (tableId - 1).toString() + "-" + (columnId - 1).toString(),
        source: (tableId - 1).toString(),
        target: (columnId - 1).toString(),
        // type: "step",
      });
      i += 1;
    });
  });
 
  i = 0;
  targetData.tables.forEach((data, index) => {
    tableId = columnId;
    nodes.push({
      id: (tableId++).toString(),
      position: { x: 1000, y: (index + 1) * 100 },
      data: { label: data.name.toString() },
      type: "",
    });
    columnId = tableId;
    data.columns.forEach((d) => {
      nodes.push({
        id: (columnId++).toString(),
        position: { x: 700, y: (i + 1) * 100 },
        data: { label: d.name },
        type: "",
      });
      edges.push({
        id: (tableId - 1).toString() + "-" + (columnId - 1).toString(),
        source: (tableId - 1).toString(),
        target: (columnId - 1).toString(),
        // type: "step",
      });
      i += 1;
    });
  });

  edges.push({id:"1-8", source:"1", target:"8", animated: true })
  edges.push({id:"2-7", source:"2", target:"7", animated: true})
  edges.push({id:"4-10", source:"4", target:"10", animated: true})
  edges.push({id:"5-11", source:"5", target:"11", animated: true})
 
  console.log("nodes", nodes);
 
  //   let node = [];
  //   const data = [
  //     {
  //       id: "0",
  //       position: { x: 0, y: 100 },
  //       data: { label: "Table A" },
  //       type: "input",
  //     },
  //     {
  //       id: "1",
  //       position: { x: 100, y: 100 },
  //       data: { label: "Column 1A" },
  //     },
  //     {
  //       id: "2",
  //       position: { x: 200, y: 200 },
  //       data: { label: "Column 2A" },
  //     },
  //     {
  //       id: "3",
  //       position: { x: 0, y: 300 },
  //       data: { label: "Table B" },
  //     },
  //     {
  //       id: "4",
  //       position: { x: 300, y: 300 },
  //       data: { label: "Column 1B" },
  //     },
  //   ];
  //   data.map((d) => {
  //     node.push(d);
  //   });
 
  //   const edge = [
  //     { id: "0-1", source: "0", target: "1" },
  //     { id: "0-2", source: "0", target: "2" },
  //     { id: "3-4", source: "3", target: "4" },
  //   ];
  //   const edges = [
  //     {
  //       id: "0-2",
  //       source: "0",
  //       target: "2",
  //     },
  //   ];
  //   console.log("node", node);
  console.log(edges);
  return (
    <div style={{ height: 700 }} className="">
      {/* {nodes.length !== 0 && ( */}
      {loader ? (
        <>
        
        <span className="absolute top-[45%] left-[43%]">Wait while your data is being mapped</span>
        <Spinner
          color="orange"
          className="h-16 w-16 absolute top-[50%] left-[50%]"
        />
        </>
      ) : (
        <ReactFlow nodes={nodes} edges={edges}>
          <Background />
          <Controls />
          <Panel >
            <pre style={{fontSize: '20px', position: 'absolute', left: '250px'}}><strong>Source Data</strong></pre>
            <pre style={{fontSize: '20px', position: 'absolute', left: '850px'}}><strong>Target Data</strong></pre>
<Link to="/loading">

<button
            style={{position:'fixed', top: '500px', left: '1000px'}}
                variant="text"
                className="bg-orange-700 text-white hover:bg-orange-500 px-3 ml-2 mt-5 h-10 rounded "
              >
                Confirm loading
              </button>
</Link>
         </Panel>
        </ReactFlow>
      )}
 
      {/* )} */}
    </div>
  );
};
 


