
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const PartsList = [
  'Light One',
  'Light Two'
];

const PartsMeta = [
  {
    "name": "Light One",
    "id": "08-UL-56"
  },
  {
    "name": "Light Two",
    "id": "07-W2-LLS"
  }
]


function App() {

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
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
                  margin-left: 15px;
                  margin-right: 15px;
                  margin-bottom: 42px;">
      </div>

      {PartsMeta.map(data =>
        <>
          <p Style="margin-left: 10px;"> {data.name} : {data.id} </p>
        </>
      )}
    </>
  );
}

export default App;
