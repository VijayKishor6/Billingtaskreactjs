import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Billingtask from './Billingtask';
import Detailstable from './Detailstable';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


function App() {
  const [stateB , setStateB]=useState([]);
  const [stateC, setStateC]=useState(false);
  const handleClick = () => {    setStateC(true)  
    }
  const submitData =(newState) =>{
    setStateB((prevB) =>[...prevB,newState]);
    setStateC(false);

  }  

  return (
    <div className="App">
      {stateC ? <Billingtask submitData={submitData}/> : <><Detailstable stateB={stateB}/><Button variant="danger" className='w-25' onClick={handleClick}>Add</Button></> }

    </div>
  );
}

export default App;
