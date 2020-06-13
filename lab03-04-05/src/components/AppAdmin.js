import React from "react";
import {Button, Nav, Tab, Col} from 'react-bootstrap';
import AddAppointmentModal  from "./AddAppointmentModal.js";
import AdminAppointments from "./AdminAppointments";
import  "../styles/Button.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Admin.scss";
import { connect } from 'react-redux';
import { fetchAppointments } from "../actions/appointments.js";
import {getAppointments} from "../reducers";
import AdminPets from "./AdminPets";
import Search from "./Search.js";
class AppAdmin extends React.Component {
 constructor(props){
    super(props)
    this.state = {AddModalAdvertShow: false}
  } 
  componentDidMount() {
    this.props.fetchAllAppointments()
  }

 
   render() {
    let AddModalAdvertClose =() => this.setState({AddModalAdvertShow:false}); 
    return (
      <section className="AdminPage ">
      
        <Tab.Container defaultActiveKey="first">
         
            <Col  className = "ContentChooser">
              <Nav variant="pills" className="box">
                <Nav.Item className="box-item pill-1">
                  <Nav.Link  eventKey="first">Appointments </Nav.Link>
                </Nav.Item>
                <Nav.Item className="box-item pill-1">
                  <Nav.Link eventKey="second">Pets</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

              <Tab.Content className="Content">
                <Tab.Pane eventKey="first" className="justify-content-center">
                  
                        <Button className="Button" variant="success" onClick={()=> this.setState({AddModalAdvertShow:true})}>
                          Add Appointment
                        </Button>
                      
                        <AddAppointmentModal
                        show={this.state.AddModalAdvertShow}
                        onHide = {AddModalAdvertClose}
                        /> 
                  <div className="ContentTable">
                      <AdminAppointments  data={this.props.appointments} />
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  
                        <Button className="Button" variant="success" onClick={()=> this.setState({AddModalAdvertShow:true})}>
                          Add Pet
                        </Button>
                      
                        <AddAppointmentModal
                        show={this.state.AddModalAdvertShow}
                        onHide = {AddModalAdvertClose}
                        /> 
                
                <div className="ContentTable">
                  <AdminPets/>
                </div>
                </Tab.Pane>
              </Tab.Content>

          
        </Tab.Container>
    </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAllAppointments: () => {
      dispatch(fetchAppointments())
    }
  }
}

function mapStateToProps(state) {
  return { appointments: getAppointments(state) }
}

const AppAdminConnected = connect(mapStateToProps, mapDispatchToProps)(AppAdmin)

export default AppAdminConnected;