import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Billingtask from "./Billingtask";
import Detailstable from "./Detailstable";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stateB, setStateB] = useState([]);
  const [stateC, setStateC] = useState(false);
  const [id, setId] = useState(0);
  const [post, posta] = useState([]);
  const handleClick = () => {
    setStateC(true);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  console.log(post, "post");
  console.log(stateB, "bbbd");

  const submitData = (newState) => {
    const index = stateB.findIndex((item) => item.id === post.id);

    if (index !== -1) {
      // If the object with the same id exists in stateB, update it
      setStateB((prevB) => {
        const updatedStateB = [...prevB];
        updatedStateB[index] = newState; // Use newState instead of post
        return updatedStateB;
      });
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    } else {
      // If the object with the same id does not exist in stateB, add it as new
      setStateB((prevB) => [...prevB, newState]);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setStateC(false);
  };

  return (
    <div className="App">
      {stateC ? (
        <Billingtask
          submitData={submitData}
          posta={post}
          stateC={stateC}
          setId={setId}
          id={id}
          email={email}
          password={password}
          firstName={firstName}
          lastName={lastName}
          setEmail={setEmail}
          setPassword={setPassword}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      ) : (
        <>
          <div className="text-end mt-4 mx-4">
            <Button variant="danger" onClick={handleClick}>
              Add
            </Button>
          </div>
          <Detailstable
            stateB={stateB}
            setStateB={setStateB}
            posta={posta}
            setStateC={setStateC}
            setEmail={setEmail}
            setPassword={setPassword}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        </>
      )}
    </div>
  );
}

export default App;
