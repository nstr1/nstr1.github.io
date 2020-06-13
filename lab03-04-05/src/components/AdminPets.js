import React from "react";

import "../styles/Appointments.scss";
import "../styles/Table.scss";

import { Table, Button} from 'react-bootstrap';





class AdminPets extends React.Component {
  render() {
    return (
      
          <Table   striped bordered hover>
              <thead>
                <th>Title</th>
                <th>Doctor</th>
                <th>Freetime</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Type</th>
                <th>Edit</th>
                <th>Delete</th>
              </thead>
              <tbody className=" align-middle ">
                {/* {this.props.data.map((el, i) => (
                <tr>
                    <th>{el.title}</th>
                    <th>{el.doctor}</th>
                    <th>{el.freetime}</th>
                    <th>{el.phone}</th>
                    <th>{el.email}</th>
                    <th>{el.city}</th>
                    <th>{el.type}</th>
                    <th><Button variant="primary">Edit</Button></th>
                    <th> <Button variant="danger">Delete</Button></th>
            </tr>
            ))} */}
        </tbody>
        </Table>

    );
  }
}

export default AdminPets;