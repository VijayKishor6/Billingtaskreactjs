import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row, Table } from "react-bootstrap";

export const Billingtask = () => {
  // State to store input values and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [stateB , setStateB]=useState([]);





  // Function to handle form submission
  const handleSubmit = () => {     

    const newState = {
      email : email,
      password : password,
      firstname : firstName,
      lastname : lastName,
  
    };

    setStateB((prevB) =>[...prevB,newState]);

    // Resetting previous error messages
    setEmailError("");
    setPasswordError("");
    setFirstNameError("");
    setLastNameError("");

    // Perform validation here
    let isValid = true;

    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!firstName) {
      setFirstNameError("First name is required");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Last name is required");
      isValid = false;
    }

    // If all inputs are valid, you can proceed with form submission
    if (isValid) {
      // Submit the form or handle your logic here
    }


  };

  return (
    <Container>
      <Row>
        <Col xs={9} className="mt-5">
          <Card className="p-2">
            <Row>
              <Col className="text-end">
                Already have an account?<a href="#">Sign in here</a>
              </Col>
            </Row>
            <Row>
              <Col>
                Email Address{" "}
                <InputGroup className="mb-3 mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {emailError && <span className="text-danger">{emailError}</span>}
              </Col>
              <Col>
                Password{" "}
                <InputGroup className="mb-3 mt-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
                {passwordError && <span className="text-danger">{passwordError}</span>}
              </Col>
            </Row>
            <Row>
              <Col>
                First Name{" "}
                <InputGroup className="mb-3 mt-3">
                  <Form.Control
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                {firstNameError && <span className="text-danger">{firstNameError}</span>}
              </Col>
              <Col>
                Last Name{" "}
                <InputGroup className="mb-3 mt-3">
                  <Form.Control
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>
                {lastNameError && <span className="text-danger">{lastNameError}</span>}
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                By creating an account, you agree to the <a href="#">Terms And Conditions</a> set out by this site, including our <a href="#">Cookies Use</a>
              </Col>
              <Col xs={3} className="text-end">
                <Button variant="danger" className="px-5" onClick={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Card>
          <Card className="mt-2 p-2">Concert</Card>
          <Card className="mt-2 p-2">Concert</Card>
        </Col>
        <Col sx={3} className="mt-5">
          <Card className="p-2">Order Summary</Card>
        </Col>
      </Row>
      <Row className="mt-3">
       
      <Table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Email Address</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {stateB.map((item,index) => (
          <tr>
            <td>{index+1}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
         </tr>
             ))}
        </tbody>
        
      </Table>
     
      </Row>
    </Container>
  );
};

export default Billingtask;
