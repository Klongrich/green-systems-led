
import React, { useState } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

//Eiko
//Part ID : Order ID  : # of Peices
const PartsList = [
  'LED13WT8/U6/840-G9DM : 10927 : 15',
  'LED12W4PH/G24Q/840DM-G7 : 10168 : 24',
  'LLW2-220-20W-840-U : 11092 : 9',
  'EMB-CP-5WBT-Y : NULL : 9',
  'LLW-440-40W-840-U: 11094 : 6',
  'LED12WT8/48/850-G8DM : 10103 : 25',
  'LED12WT8/48/840-DBL-A : NULL : 31',
  'DKDS-6-15W/10.5/940-DIM-120 : 10301 : 14',
  'SSD6-84-12W-9CCT3-120DT-WH : 11287 : 12',
  'SDL6RBAFCCTDWW : 10817 : 2',
  'CDR-8-10/85/840-SSW-DIM-U : 10117 : 2',
  'LED43WT8/96/850-R17D-G8 : 10105 : 14',
  'LED11WPAR30/FL/840-DIM-G9 : 10768 : 18',
  'XELEUM-8-FOOT : NULL : 2',
  'LED8WA19/OMN/830-DIM-B : 11075 : 11'
];

// const PartsMeta = [
//   {
//     "name": "Light One",
//     "id": "08-UL-56",
//     "location": "A1"
//   },
//   {
//     "name": "Light Two",
//     "id": "07-W2-LLS",
//     "location": "A2"
//   }
// ]

function App() {

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div Style="margin-left: 21px;
                  margin-right: 21px;
                  font-family: times new roman">
        <h2> Green Systems LED Inventory Check</h2>

        <Autocomplete
          open={open}
          onOpen={() => {
            if (inputValue) {
              setOpen(true);
            }
          }}
          inputValue={inputValue}
          onInputChange={(e, value) => {
            setInputValue(value);
            if (!value) {
              setOpen(false);
            }
          }}
          options={PartsList}
          renderInput={(params) => (
            <TextField {...params} label="Enter Part Number" variant="outlined" />
          )}
        />

        <div Style="border: 1px solid black;
                  margin-top: 42px;
                  margin-bottom: 42px;">
        </div>

        {/* 
      {PartsMeta.map(data =>
        <>
          <p Style="margin-left: 10px;"> {data.name} : {data.id} -> {data.location} </p>
        </>
      )} */}
      </div>
    </>
  );
}

export default App;
