import React from 'react'
import { Button, Row, Table } from 'react-bootstrap'

const Detailstable = ({stateB}) => {
  return (
    <>
    <Row className="mt-3 justify-content-center">
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
    </>
  )
}

export default Detailstable