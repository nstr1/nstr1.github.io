import React from "react";
import {Button, Form, Card} from 'react-bootstrap';
import { getAppointment, updateAppointment } from '../api/appointments.js';
import "../styles/Auth.scss"

class UpdateAppointment extends React.Component {
    constructor(props){
        super(props);
    
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFreetime = this.onChangeFreetime.bind(this);
        this.onChangeDoctor = this.onChangeDoctor.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
    
        this.get = this.get.bind(this);
        this.update = this.update.bind(this);
    
    
    
    
        this.state = {
            id: null,
            title: "",
            doctor: "",
            phone: "",
            email: "",
            freetime: "",
            city: "",
            type: "",
        };
    }
    
    componentDidMount(){
      this.get(this.props.match.params.id);
      console.log(this.props.match.params.id)
    }
    
    
    onChangeTitle(ev){
      const title = ev.target.value;
    
      this.setState(function(prevState){
        return {
              title: title,
          ...prevState.doctor,
          ...prevState.phone,
          ...prevState.email,
          ...prevState.freetime,
          ...prevState.city,
          ...prevState.type
    
        };
      });
    }
    
    onChangeDoctor(ev){
      const doctor = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
             doctor: doctor,
          ...prevState.phone,
          ...prevState.email,
          ...prevState.freetime,
          ...prevState.city,
          ...prevState.type
    
        };
      });
    }
    
    
    onChangePhone(ev){
      const phone = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
          ...prevState.doctor,
             phone: phone,
          ...prevState.email,
          ...prevState.freetime,
          ...prevState.city,
          ...prevState.type
    
        };
      });
    }
    
    onChangeEmail(ev){
      const email = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
          ...prevState.doctor,
          ...prevState.phone,
              email: email,
          ...prevState.freetime,
          ...prevState.city,
          ...prevState.type
    
        };
      });
    }
    
    onChangeFreetime(ev){
      const freetime = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
          ...prevState.doctor,
          ...prevState.phone,
          ...prevState.email,
              freetime: freetime,
          ...prevState.city,
          ...prevState.type
    
        };
      });
    }
    
    onChangeCity(ev){
      const city = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
          ...prevState.doctor,
          ...prevState.phone,
          ...prevState.email,
          ...prevState.freetime,
              city: city,
          ...prevState.type
        };
      });
    }
    
    onChangeType(ev){
      const type = ev.target.value;
    
      this.setState(function(prevState){
        return {
          ...prevState.title,
          ...prevState.doctor,
          ...prevState.phone,
          ...prevState.email,
          ...prevState.freetime,
          ...prevState.city,
          type: type,
    
        };
      });
    }
    
    
    update(ev) {
      console.log("in update");
      ev.preventDefault();
      const { title,doctor,phone,email,freetime,city,type } = this.state;
      if (title && doctor && phone && email && freetime && city && type) {
        updateAppointment(this.props.match.params.id,title,doctor,phone,email,freetime,city,type);
        this.setState({ error: false });
      } else this.setState({ error: true });
      window.location.href="/admin";
    }
    
     get(id){
      getAppointment(id)
        .then( response=>{
          this.setState({
            id: response.id,
            title: response.title,
            doctor: response.doctor,
            phone: response.phone,
            email: response.email,
            freetime: response.freetime,
            city: response.city,
            type: response.type
          })
        })

    }
    
    
    render() {
        const {title,doctor,phone,email,freetime,city,type } = this.state;
        return (
            <div className="cardDiv">
              <Card>
                <Form>
                    <Card.Header className="bg-dark header">Edit</Card.Header>
                    <Form.Group controlId = "title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"  value={title} onChange={this.onChangeTitle}/>
                    </Form.Group>
                    <Form.Group controlId = "freetime">
                        <Form.Label>Freetime</Form.Label>
                        <Form.Control type="text"  value={freetime} onChange={this.onChangeFreetime} />
                    </Form.Group>
                    <Form.Group controlId = "doctor">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control type="text"  value={doctor} onChange={this.onChangeDoctor}/>
                    </Form.Group>
            
                    <Form.Group controlId = "phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" value={phone} onChange={this.onChangePhone}/>
                    </Form.Group>
                
                    <Form.Group controlId = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={this.onChangeEmail}/>
                    </Form.Group>
                
                    <Form.Group controlId = "city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text"  value={city} onChange={this.onChangeCity}/>
                    </Form.Group>
            
                    <Form.Group controlId = "type">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" value={type} onChange={this.onChangeType}/>
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={(ev) => this.update(ev)}>Submit</Button>
                <Button variant="danger" >Close</Button>
                </Card>
            </div>
        );
    }
  
}


export default UpdateAppointment;
