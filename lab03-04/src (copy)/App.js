import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";
import AddAppointmentModal from "./components/AddAppointmentModal.js";
import AppAdmin from "./components/AppAdmin.js";
import UpdateAppointment from "./components/UpdateAppointment.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={HomePage} />
        <Route path="/addAppointment" component={AddAppointmentModal} />
        <Route path="/admin" component={AppAdmin} />
        <Route path="/advertisments/:id" component={UpdateAppointment}/>
      </Switch>
    </div>
  );
}

export default App;
