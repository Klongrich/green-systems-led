
import React, { useState } from "react";
import './App.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

const PartsList = [
  'Light One',
  'Light Two'
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
