import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export const Billingtask = ({submitData}) => {
  // State to store input values and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");


  // Function to handle form submission
  const handleSubmit = () => {     

    const newState = {
      email : email,
      password : password,
      firstname : firstName,
      lastname : lastName,
  
    };

    submitData(newState);

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
console.log(submitData,"submitData");
console.log(handleSubmit,"handleSubmit");

  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
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
              <Col xs={2} className="text-end">
                <Button variant="danger" className="w-100" onClick={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Card>
        
        </Col>
       
      </Row>
    </Container>
  );
};

export default Billingtask;
