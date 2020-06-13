import React from "react";
import "../styles/HomePage.scss";
import "../styles/Search.scss"
import FilterBar from "./FilterBar.js";
import Appointments from "./Appointments.js";
import { connect } from 'react-redux'
import { fetchAppointments } from "../actions/appointments.js"
import {getAppointments} from "../reducers"
import { Form, Button, FormControl } from "react-bootstrap";


class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.onChangeFilter = this.onChangeFilter.bind(this);


    this.state={
      filter:""
    }
  }

  componentDidMount() {
    this.props.fetchAllAppointments()
  }

  onChangeFilter(ev){
    this.setState({
      filter: ev.target.value
     });
  }

  render() {
    const filter = this.state.filter
    return (
      <section className="HomePage">
        <Form className="Search">
          <FormControl type="text" value={filter} placeholder="Search" onChange={this.onChangeFilter} className="input mr-sm-2" />
        </Form>
        <main className="main">
          <Appointments data={this.props.appointments.filter(appointment=>
            appointment.title.toLowerCase().includes(filter.toLowerCase()))} />
            <FilterBar/>
        </main>
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

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageConnected;
