import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export const Billingtask = ({ submitData }) => {
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
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
    };

    // Resetting previous error messages
    setEmailError("");
    setPasswordError("");
    setFirstNameError("");
    setLastNameError("");

    //validation done here
    let isValid = true;

    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters");
      isValid = false;
    }

    if (!firstName) {
      setFirstNameError("First name is required");
      isValid = false;
    } else if (!isText(firstName)) {
      setFirstNameError("Invalid first name");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Last name is required");
      isValid = false;
    } else if (!isText(lastName)) {
      setLastNameError("Invalid last name");
      isValid = false;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isText(input) {
      const textRegex = /^[A-Za-z\s]+$/;
      return textRegex.test(input);
    }
    if (isValid) {
      submitData(newState);
    }
    console.log(submitData, "submitData");
    console.log(handleSubmit, "handleSubmit");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark p-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="row ">
              <div className="col-12">
                <div className="card  p-4 ">
                  <div className="row ">
                    <h4>
                      <span className="no m-0">1&nbsp;</span>Account Details
                    </h4>
                    <p className="sign text-end d-lg-block d-none">
                      Already have an Account?
                      <a className="link" href>
                        Sign in here
                      </a>
                    </p>
                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <h6>Email Address *</h6>
                          <InputGroup className="inputfield mb-3">
                            <Form.Control
                              type="email"
                              placeholder="Email Address"
                              aria-label="Email Address"
                              aria-describedby="basic-addon1"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>
                          {emailError && (
                            <span className="text-danger">{emailError}</span>
                          )}
                          {/* <input type="text" className="form-control" placeholder="Email address" name="email"/> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-0 ">
                          <h6>Password *</h6>
                          <div className="input-group input-group-sm mb-3">
                            <InputGroup className="inputfield mb-3">
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />{" "}
                            </InputGroup>
                            {passwordError && (
                              <span className="text-danger">
                                {passwordError}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <h6>First Name *</h6>
                          <InputGroup className="inputfield mb-3">
                            <Form.Control
                              placeholder="First Name"
                              aria-label="First Name"
                              aria-describedby="basic-addon1"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </InputGroup>
                          {firstNameError && (
                            <span className="text-danger">
                              {firstNameError}
                            </span>
                          )}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-0">
                          <h6>Last Name *</h6>
                          <InputGroup className="mb-3 ">
                            <Form.Control
                              placeholder="Last Name"
                              aria-label="Last Name"
                              aria-describedby="basic-addon1"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </InputGroup>
                          {lastNameError && (
                            <span className="text-danger">{lastNameError}</span>
                          )}
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-lg-8 col-md-7 col-sm-12">
                          <p className="terms">
                            By craeting an account,you agree to the&nbsp;
                            <a className="link" href>
                              Terms And Conditions
                            </a>{" "}
                            set out by this site,including our{" "}
                            <a className="link" href>
                              Cookies Use
                            </a>{" "}
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 text-end ">
                          <Button
                            variant="danger"
                            className="w-100 btn-lg mbtn "
                            onClick={handleSubmit}
                            style={{
                              backgroundColor: "#ec6611",
                              borderColor: "#ec6611",
                            }}
                          >
                            Continue
                          </Button>
                          {/* <button
                            type="button"
                            className="btn btn-danger btn-lg w-100 mbtn"
                          
                          >
                            Continue
                          </button> */}
                        </div>
                        <div className="col-sm-12 d-block d-md-none mt-3 downsign">
                          <p className="sign text-end">
                            Already have an Account?
                            <a className="link" href>
                              Sign in here
                            </a>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card p-4 mobilecard">
                  <h4>
                    <span className="no">2&nbsp;</span>Billing details
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card p-4 mobilecard">
                  <h4>
                    <span className="no">3&nbsp;</span>Payment
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <div className="order ">
              <div className="card">
                <h4>Order summary</h4>
                <br></br>

                <div className="row">
                  <div className="col-8">
                    <h5>Plan</h5>
                  </div>
                  <div className="col" style={{ textAlign: "end" }}>
                    <h5>Price</h5>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-8">
                    <h6>Free Trail</h6>
                  </div>
                  <div className="col" style={{ textAlign: " end" }}>
                    <h6>₹0.00</h6>
                  </div>
                </div>
                <br></br>
                <hr style={{ width: "100% " }} />
                <br></br>
                <div className="row">
                  <div className="col-8">
                    <h5>Total due today</h5>
                  </div>
                  <div className="col" style={{ textAlign: "end" }}>
                    <h5>₹0.00</h5>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col mb-3">
                    <h6>Pack free trail</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billingtask;
