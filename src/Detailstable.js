import moment from "moment/moment";
import React from "react";
import { Button, Row, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Detailstable = ({
  stateB,
  setStateB,
  setStateC,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  posta
}) => {
  const deletedata = (index) => {
    const x = [...stateB];
    x.splice(index, 1);
    setStateB(x);
  };

  const editData = (item) => {
    posta(item)
    setEmail(item.email);
    setPassword(item.password);
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setStateC(true);
  };
  return (
    <>
      <Row className="mt-3 p-4">
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Email Address</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateB.length > 0 ? (
              stateB.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>True</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{moment().format("MMMM Do YYYY")}</td>
                  <td>{moment().format("h:mm:ss a")}</td>
                  <td>
                    <Button
                      onClick={() => editData(item)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    >
                      <AiFillEdit />
                    </Button>
                    <Button
                      onClick={() => deletedata(index)}
                      style={{
                        backgroundColor: "white",
                        borderColor: "white",
                        color: "black",
                      }}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center " colSpan={8}>
                  <h3>No Data Found</h3>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default Detailstable;
