import React from "react";
import {Link} from "react-router-dom";
import "../styles/Appointments.scss";
import "../styles/Table.scss";
import { connect } from 'react-redux'


import {deleteAppointment} from "../actions/appointments";

import {Table, Button} from 'react-bootstrap';


class AdminAppointments extends React.Component {

  constructor(props){
    super(props)
    
  }



  


  render() {
    
    return (
      
          <Table   striped bordered hover className="table-light">
              <thead className="thead-dark">
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
                {this.props.data.map((el, i) => (
                <tr className="">
                    <th>{el.title}</th>
                    <th>{el.doctor}</th>
                    <th>{el.freetime}</th>
                    <th>{el.phone}</th>
                    <th>{el.email}</th>
                    <th>{el.city}</th>
                    <th>{el.type}</th>
                    <th><Button variant="secondary" href={"/advertisments/"+el.id}>Edit</Button></th>
                    <th> <Button variant="danger" onClick={()=>this.props.removeAppointment(el.id)}>Delete</Button></th>
                    
            </tr>
            ))}
        </tbody>
        </Table>

    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    removeAppointment: (id) => {
      dispatch(deleteAppointment(id))
    }
  }
}


const AdminAppointmentsConnected = connect(null, mapDispatchToProps)(AdminAppointments)



export default AdminAppointmentsConnected;