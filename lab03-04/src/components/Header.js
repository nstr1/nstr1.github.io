import React from "react";
import "../styles/Header.scss";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from '../icons/logo.svg';
import  AddAppointmentModal  from "./AddAppointmentModal";
import ErrorModal from "./ErrorModal";
import LogOutModal from "./LogOutModal";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      AddModalShow: false,
      ErrorModalShow: false,
      LogOutModalShow: false,
      loggedIn:false,
    }
  }


  
  componentDidMount(){
    console.log({localStorage})
    console.log({key: localStorage.getItem("key")});
    if(localStorage.getItem("key")){
      console.log('inside if');
     this.setState({ 
      loggedIn:true
     });

    }
  }

  checkLoginModals(){
    if(localStorage.getItem("key")){
      this.setState({
        AddModalShow:true,
            });

    }else{
      this.setState({
        ErrorModalShow:true,
      });
    }
  }


  render() {
    let AddModalClose =() => this.setState({AddModalShow:false}); 
    let ErrorModalClose =() => this.setState({ErrorModalShow:false}); 
    let LogOutModalClose=() => this.setState({LogOutModalShow:false});
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">PetApp</Navbar.Brand>
        <Logo/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"/>
          <Nav>
            <Nav.Link onClick={()=> this.checkLoginModals()}>Add</Nav.Link>
            <Nav.Link hidden={this.state.loggedIn} href="/login">Log in</Nav.Link>
            <Nav.Link hidden={this.state.loggedIn} href="/registration">Sign up</Nav.Link>
            <Nav.Link hidden={!(this.state.loggedIn)} href="/admin">Edit</Nav.Link>
            <Nav.Link hidden={!(this.state.loggedIn)} onClick={()=>this.setState({LogOutModalShow:true})}>Log out</Nav.Link>
            <AddAppointmentModal
              show={this.state.AddModalShow}
              onHide = {AddModalClose}
            />
            <ErrorModal
              show = {this.state.ErrorModalShow}
              onHide = {ErrorModalClose}
            />
            <LogOutModal
              show={this.state.LogOutModalShow}
              onHide={LogOutModalClose}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
