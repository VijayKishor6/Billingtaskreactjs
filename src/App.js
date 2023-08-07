import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Billingtask from "./Billingtask";
import Detailstable from "./Detailstable";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [stateB, setStateB] = useState([]);
  const [stateC, setStateC] = useState(false);
  const handleClick = () => {
    setStateC(true);
  };
  const submitData = (newState) => {
    setStateB((prevB) => [...prevB, newState]);
    setStateC(false);
  };

  return (
    <div className="App">
      {stateC ? (
        <Billingtask submitData={submitData} />
      ) : (
        <>
         <div className="text-end mt-4 mx-4">
            <Button variant="danger"  onClick={handleClick}>
              Add
            </Button>
          </div>
          <Detailstable stateB={stateB} />
         
        </>
      )}
    </div>
  );
}

export default App;
